import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Hook
import { ThemeProvider } from "./hooks/theme/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
