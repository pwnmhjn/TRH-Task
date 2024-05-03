import React from "react";
import ReactDOM from "react-dom/client";
import { ToggleContextProvider } from "./Contexts/ToggleContext.jsx";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </React.StrictMode>
);
