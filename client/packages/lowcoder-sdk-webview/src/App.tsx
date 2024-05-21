import React, {useEffect, useState} from 'react';
import {LowcoderAppView} from "lowcoder-sdk";

declare global {
    interface Window {
        flutter_inappwebview: { callHandler: any };
        loadScreen: (arg: never) => void;
    }
}

function App() {
    const [appId, setAppId] = useState<string>('');
    const [baseUrl, setBaseUrl] = useState<string | undefined>('');
    const [webUrl, setWebUrl] = useState<string | undefined>('');
    const [input, setInput] = useState<Record<string, never> | undefined>({});
    const [appDsl, setAppDsl] = useState<never>();
    const [moduleDslMap, setModuleDslMap] = useState<never>();

    const emitEvent = (message: any) => {
        console.debug('event', message)
        window.flutter_inappwebview?.callHandler('MessageInvoker', message);
    }

    useEffect(() => {
        const url = new URL(location.href);
        const appIdQuery = url.searchParams.get("appId");
        const moduleInputsQuery = url.searchParams.get("moduleInputs");
        const baseUrlQuery = url.searchParams.get("baseUrl") || "https://screenbuilder.xrcommunity.org";
        const webUrlQuery = url.searchParams.get("webUrl") || "https://screenbuilder.xrcommunity.org"
        if (appIdQuery) setAppId(appIdQuery);
        if (moduleInputsQuery) setInput(JSON.parse(atob(moduleInputsQuery)));
        if (baseUrlQuery) setBaseUrl(baseUrlQuery);
        if (webUrlQuery) setWebUrl(webUrlQuery);

        window.loadScreen = ({
                                 appId, baseUrl, moduleInputs, appDsl, moduleDslMap
                             }: any) => {
            if (appId) setAppId(appId);
            if (baseUrl) setBaseUrl(baseUrl);
            if (moduleInputs) setInput(moduleInputs)
            if (appDsl) setAppDsl(appDsl);
            if (moduleDslMap) setModuleDslMap(moduleDslMap);
        }
    }, []);

    return (appId ? <LowcoderAppView
        webUrl={webUrl}
        appId={appId}
        baseUrl={baseUrl}
        moduleInputs={input}
        onModuleEventTriggered={(name: string) => {
            emitEvent({type: 'event', data: name});
        }}
        onModuleOutputChange={(output: any) => {
            emitEvent({type: 'outputChange', data: output});
        }}
        appDsl={appDsl}
        moduleDslMap={moduleDslMap}
    /> : <div>
        < h2> No event has occurred yet</h2>
        < h3>click to see sample change</h3>
    </div>);
}

export default App;
