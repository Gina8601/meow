import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";

const container = document.getElementById("root");

(async () => {
  if (Capacitor.isNativePlatform()) {
    let initialHeight = document.documentElement.clientHeight;

    const resizeFunction = () => {
      container?.style.setProperty(
        "--status-height",
        `${document.documentElement.clientHeight - initialHeight}px`
      );

      window.removeEventListener("resize", resizeFunction);
    };

    window.addEventListener("resize", resizeFunction);

    await StatusBar?.setOverlaysWebView({ overlay: true });
    await StatusBar?.setStyle({ style: Style.Light });
  }
})();

const root = createRoot(container!);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
