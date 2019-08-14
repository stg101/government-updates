import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Global } from "@emotion/core";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Global
      styles={{
        body: {
          fontFamily: "'Roboto', 'sans-serif'",
          padding: "0px",
          margin: 0,
          backgroundColor: "rgb(240,240,240)",
          fontSize: "small"
        },
        a: { textDecoration: "inherit", color: "inherit" },
        "h1, h2, h3, p, ul, li": { margin: 0, padding: 0 }
      }}
    />
    <App />
  </Provider>,
  document.getElementById("root")
);
