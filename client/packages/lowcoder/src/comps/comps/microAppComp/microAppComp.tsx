import {JSONValueControl, StringControl} from "comps/controls/codeControl";
import {UICompBuilder, withDefault} from "comps/generators";
import {NameConfig, NameConfigHidden, withExposingConfigs} from "comps/generators/withExposing";
import {Section, sectionNames} from "lowcoder-design";
import React, {useEffect, useRef, useState} from "react";
import {hiddenPropertyView} from "comps/utils/propertyUtils";
import {AutoHeightControl} from "comps/controls/autoHeightControl";
import {mountRootParcel, Parcel} from 'single-spa';
import {useDeepCompareEffect} from "use-deep-compare";

/**
 * Create an HTML LINK element for a CSS resource that points to the given CSS URL.
 * @param href URL to the CSS file.
 * @param preload
 * @returns The newly created HTML LINK element (unattached to the document).
 */
export function createLinkElement(href: string, preload?: boolean) {
  const el = globalThis.document.createElement('link');
  if (preload) {
    el.rel = 'preload';
    el.as = 'style';
  } else {
    el.rel = 'stylesheet';
    el.disabled = true;
  }
  el.href = href;
  return el;
}


const childrenMap = {
  entry: StringControl,
  entryCss: StringControl,
  input: JSONValueControl,
  autoHeight: withDefault(AutoHeightControl, "fixed")
};

const MicroAppCompBase = new UICompBuilder(childrenMap, (props, dispatch) => {
  const {entry, input, entryCss} = props;
  const myRef = useRef(null);
  const [mountedApp, setMountedApp] = useState<Parcel | undefined>(undefined);

  useEffect(() => {
    const mountApp = async () => {
      const microApp = await import(/* @vite-ignore */ entry);

      let parcelConfig;
      if (entryCss) {
        let loadedCss: HTMLLinkElement;
        const cssLifeCycles = {
          async bootstrap() {
            loadedCss = createLinkElement(entryCss);
            loadedCss.disabled = true;
            document.head.appendChild(loadedCss);
          }, async mount() {
            loadedCss.disabled = false;
          }, async unmount() {
            loadedCss.disabled = true;
          },
        };

        parcelConfig = {
          bootstrap: [cssLifeCycles.bootstrap, microApp.bootstrap],
          mount: [cssLifeCycles.mount, microApp.mount],
          unmount: [cssLifeCycles.unmount, microApp.unmount],
          update: [microApp.update],
        };
      } else parcelConfig = {
        bootstrap: [microApp.bootstrap],
        mount: [microApp.mount],
        unmount: [microApp.unmount],
        update: [microApp.update],
      };

      const parcel = mountRootParcel(parcelConfig, {
        domElement: myRef.current!, ...(input as any),
      });

      setMountedApp(parcel);
      await parcel.mountPromise;
    }

    mountApp();

    return () => {
      mountedApp?.unmount();
    }
  }, [entry, entryCss]);

  useDeepCompareEffect(() => {
    mountedApp?.update?.(input as any);
  }, [input]);

  useEffect(() => {
    return () => {
      mountedApp?.unmount();
    }
  }, []);

  return (<div ref={myRef}/>);
})
  .setPropertyViewFn((children) => {
    return (<>
      <Section name={sectionNames.basic}>
        {children.entry.propertyView({label: "Entry link"})}
        {children.entryCss.propertyView({label: "Entry CSS link"})}
        {children.input.propertyView({label: "Input data"})}
      </Section>
      <Section name={sectionNames.interaction}>
        {hiddenPropertyView(children)}
        {children.autoHeight.getPropertyView()}
      </Section>
    </>)
  })
  .build();

class MicroAppCompAutoHeight extends MicroAppCompBase {
  override autoHeight(): boolean {
    return this.children.autoHeight.getView();
  }
}

export const MicroAppComp = withExposingConfigs(MicroAppCompAutoHeight, [new NameConfig("entry", "Entry link"), NameConfigHidden,]);
