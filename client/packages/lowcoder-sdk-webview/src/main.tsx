import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppMetadata, mountMicroApp, registerMicroApps } from "./micro-frontend";
import microAppConfigs from "./micro-apps.json";

(window as any).registerMicroApps = registerMicroApps;
(window as any).mountMicroApp = mountMicroApp;

registerMicroApps(microAppConfigs as AppMetadata[]);

const apiKey = new URL(location.href).searchParams.get("LOWCODER_API_KEY");
if (apiKey) {
  localStorage.setItem("LOWCODER_API_KEY", apiKey);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
