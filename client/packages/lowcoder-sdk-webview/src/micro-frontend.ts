/**
 * Create an HTML LINK element for a CSS resource that points to the given CSS URL.
 * @param href URL to the CSS file.
 * @param preload
 * @returns The newly created HTML LINK element (unattached to the document).
 */
export function createLinkElement(href: string, preload?: boolean) {
  const el = globalThis.document.createElement("link");
  if (preload) {
    el.rel = "preload";
    el.as = "style";
  } else {
    el.rel = "stylesheet";
    el.disabled = true;
  }
  el.href = href;
  return el;
}

let microApps: MicroApp[] = [];

export enum MicroAppType {
  ESM = "ESM",
  SYSTEMJS = "SYSTEMJS",
}

export type AppMetadata = {
  // app name
  name: string; // app entry
  entry: string;
  cssEntry?: string;
  container: string;
  prefetch?: boolean;
  props?: any;
  type?: MicroAppType;
};

type MicroApp = AppMetadata & {
  loadedApp?: any;
  loadedCss?: HTMLLinkElement;
  bootstrapped?: boolean;
};

export function registerMicroApps(apps: AppMetadata[]) {
  // Each app only needs to be registered once
  const unregisteredApps: MicroApp[] = apps.filter(
    (app) => !microApps.some((registeredApp) => registeredApp.name === app.name)
  );

  microApps = [...microApps, ...unregisteredApps];

  unregisteredApps.forEach(async (app) => {
    if (app.prefetch) {
      app.loadedApp =
        app.type === MicroAppType.SYSTEMJS
          ? await System.import(app.entry)
          : await import(/* @vite-ignore */ app.entry);
      if (app.cssEntry) {
        document.head.appendChild(createLinkElement(app.cssEntry, true));
      }
    }
  });
}

export type Parcel<ExtraProps = any> = {
  unmount(): Promise<void>;
  update?(customProps: ExtraProps): Promise<any>;
};

type ParcelProps = { domElement: HTMLElement; basename?: string; url?: string };

type LifeCycleFn<ExtraProps> = (config: ExtraProps & ParcelProps) => Promise<any>;

export type LifeCycles<ExtraProps = object> = {
  bootstrap: Array<LifeCycleFn<ExtraProps>>;
  mount: Array<LifeCycleFn<ExtraProps>>;
  unmount: Array<LifeCycleFn<ExtraProps>>;
  update?: Array<LifeCycleFn<ExtraProps>>;
};

function trimUrlAppProps(appProps: ParcelProps) {
  if (appProps.basename && appProps.url?.startsWith(appProps.basename)) {
    appProps.url = appProps.url.replace(appProps.basename, "");
  }
  return appProps as any;
}

async function mountParcel<ExtraProps = any>(
  parcelConfig: LifeCycles<ExtraProps>,
  parcelProps: ParcelProps & ExtraProps
): Promise<Parcel<ExtraProps>> {
  const appProps = trimUrlAppProps(parcelProps);
  await Promise.all(parcelConfig.mount.map(async (fn) => await fn(appProps)));
  return {
    unmount: async () => {
      await Promise.all(parcelConfig.unmount.map(async (fn) => await fn(appProps)));
    },
    update: async (props: ExtraProps) => {
      const appProps = trimUrlAppProps({ ...parcelProps, ...props });
      await Promise.all(parcelConfig.update?.map(async (fn) => await fn(appProps)) || []);
    },
  };
}

// create a function to subscribe to when the app props change, and call the callback with the new props. Return a function to unsubscribe
type AppProps = {
  userData?: any;
  env?: any;
  url?: string;
  theme?: string;
};

let currentProps: AppProps = {
  env: {
    baseURL: "https://bvhttdl.ioc-cloud.com/api-ioc",
    tenant: "iocv3-bvh",
  },
};

const subscribers: Array<(props: AppProps) => void> = [];

function subscribeToAppPropsChange(callback: (props: AppProps) => void) {
  const index = subscribers.length;
  subscribers.push(callback);

  // Call the callback immediately with the current props
  callback(currentProps);

  // Return an unsubscribe function
  return () => {
    subscribers.splice(index, 1);
  };
}

function setAppProps(newProps: AppProps) {
  currentProps = { ...currentProps, ...newProps };
  subscribers.forEach((callback) => callback(currentProps));
}

function onQueryParamChange() {
  const url = new URL(location.href);
  const moduleInputsQuery = url.searchParams.get("moduleInputs");

  if (moduleInputsQuery) {
    const parsedInput = JSON.parse(moduleInputsQuery);
    if (parsedInput?.accessToken) {
      setAppProps({
        userData: { accessToken: parsedInput.accessToken },
        theme: parsedInput?.colorScheme ?? "light",
      });
    }
  }
}

onQueryParamChange();

(function (history) {
  const pushState = history.pushState;
  history.pushState = function (...args) {
    // Call your custom function here
    onQueryParamChange();

    return pushState.apply(history, args);
  };
})(window.history);

export async function mountMicroApp(appName: string, mountProps?: any): Promise<Parcel | null> {
  const app = microApps.find((app) => app.name === appName);
  if (!app) return null;
  mountProps = {
    ...currentProps,
    ...mountProps,
  };

  const { container, props, ...appConfig } = app;
  let parcelConfig: LifeCycles;
  const loadedApp =
    app.loadedApp ??
    (app.type === MicroAppType.SYSTEMJS
      ? await System.import(appConfig.entry)
      : await import(/* @vite-ignore */ appConfig.entry));
  if (appConfig.cssEntry) {
    const cssLifeCycles = {
      async bootstrap() {
        if (!app.loadedCss) {
          app.loadedCss = createLinkElement(appConfig.cssEntry!);
          app.loadedCss.disabled = true;
          document.head.appendChild(app.loadedCss);
        } else app.loadedCss.disabled = false;
      },
      async mount() {
        app.loadedCss!.disabled = false;
      },
      async unmount() {
        app.loadedCss!.disabled = true;
      },
    };

    parcelConfig = {
      bootstrap: [cssLifeCycles.bootstrap, loadedApp.bootstrap],
      mount: [cssLifeCycles.mount, loadedApp.mount],
      unmount: [cssLifeCycles.unmount, loadedApp.unmount],
      update: [loadedApp.update],
    };
  } else
    parcelConfig = {
      bootstrap: [loadedApp.bootstrap],
      mount: [loadedApp.mount],
      unmount: [loadedApp.unmount],
      update: [loadedApp.update],
    };

  if (!app.bootstrapped) {
    await Promise.all(
      parcelConfig.bootstrap.map(
        async (fn) =>
          await fn({
            ...props,
            ...mountProps,
          })
      )
    );
    app.bootstrapped = true;
  }

  const microApp = await mountParcel(parcelConfig, {
    container,
    domElement: document.getElementById(container),
    ...props,
    ...mountProps,
  });

  const unsubscribe = subscribeToAppPropsChange((appProps) => {
    // This code will execute whenever ANY of signal1, signal2, or signal3 changes.
    microApp.update?.({
      ...props,
      ...mountProps,
      ...appProps,
    });
  });

  return {
    ...microApp,
    unmount(): Promise<void> {
      unsubscribe();
      return microApp.unmount();
    },
  };
}
