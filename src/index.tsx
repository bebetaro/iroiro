import "reboot.css";
import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { Page } from "./components/page";

ReactModal.setAppElement("#root");

const App = () => {
  return (
    <div>
      <Page />
    </div>
  );
};

const target = document.querySelector("#root");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    if (target) {
      ReactDOM.render(<App />, target);
    }
  });
} else {
  ReactDOM.render(<App />, target);
}
