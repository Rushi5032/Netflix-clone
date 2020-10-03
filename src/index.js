import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import GLobalStyles from "./global-styles";

ReactDOM.render(
  <>
    <GLobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
