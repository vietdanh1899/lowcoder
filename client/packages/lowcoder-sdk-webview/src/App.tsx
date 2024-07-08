import React, {useEffect, useState} from 'react';
import {LowcoderAppView} from "lowcoder-sdk";
import "lowcoder-sdk/dist/style.css";
import "./lara-light-blue.css";

declare global {
    interface Window {
        flutter_inappwebview: { callHandler: any };
        loadScreen: (arg: never) => void;
    }
}

const loader = document.querySelector(".skeleton-container");

const hideLoader = () => loader?.classList.add("loader-hide");

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
        hideLoader();
    }, []);

    useEffect(() => {
        const url = new URL(location.href);
        const appIdQuery = url.searchParams.get("appId");
        const moduleInputsQuery = url.searchParams.get("moduleInputs");



        const baseUrlQuery = url.searchParams.get("baseUrl") || "https://screenbuilder.smartcity-cloud.org/prod";
        const webUrlQuery = url.searchParams.get("webUrl") || "https://screenbuilder.smartcity-cloud.org"
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
        < h2>Loading ...</h2>
    </div>);
}

export default App;
