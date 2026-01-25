import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AppProvider from "./context/AppContext.jsx";
import SessionProvider from "./context/SessionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SessionProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </SessionProvider>
  </StrictMode>,
);
