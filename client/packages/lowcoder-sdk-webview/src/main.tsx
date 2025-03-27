import React from "react";
import ReactDOM from "react-dom/client";
import { AppMetadata, mountMicroApp, registerMicroApps } from "./micro-frontend";
import microAppConfigs from "./micro-apps.json";
import { createBrowserRouter, RouterProvider } from "react-router";

(window as any).registerMicroApps = registerMicroApps;
(window as any).mountMicroApp = mountMicroApp;

registerMicroApps(microAppConfigs as AppMetadata[]);

const apiKey = new URL(location.href).searchParams.get("LOWCODER_API_KEY");
if (apiKey) {
  localStorage.setItem("LOWCODER_API_KEY", apiKey);
}

const router = createBrowserRouter([
  {
    path: "/micro/:microAppName",
    lazy: async () => ({ Component: (await import("./micro/index")).default }),
  },
  {
    path: "/",
    lazy: async () => {
      return { Component: (await import("./App")).default };
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
