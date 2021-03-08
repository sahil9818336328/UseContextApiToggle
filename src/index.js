import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      {/*has access to all the values passed to Provider as Props, these values are accessible/available to all the components no matter how deeply nested they are. */}
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
