import r2wc from '@r2wc/react-to-web-component';
import { LowcoderAppView, EventTriggerHandler, OutputChangeHandler } from 'lowcoder';

type AppViewProp = {
  appId: string;
  baseUrl: string;
  input: Record<string, any>;
  onEventTriggered: EventTriggerHandler;
  onOutputChange: OutputChangeHandler<any>;
}

export function ReactDemoApp({ appId, baseUrl, input, onEventTriggered, onOutputChange }: AppViewProp) {
  if (!appId || !baseUrl) {
    return null;
  }
  

  return (
    <div>
      <LowcoderAppView
        appId={appId}
        baseUrl={baseUrl}
        moduleInputs={input}
        onModuleEventTriggered={onEventTriggered}
        onModuleOutputChange={onOutputChange}
      />
    </div>
  );
}

customElements.define("screen-renderer", r2wc(ReactDemoApp, { props: { appId: "string", baseUrl: "string", input: "json", onEventTriggered: "function", onOutputChange: "function" } }));
