import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
  return new Web3Provider(provider);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>
);
