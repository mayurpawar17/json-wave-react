import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/components/styles/global.css";
import { ThemeProvider  } from "./context/ThemeContext";

import "../src/components/styles/dark.css";
import "../src/components/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
