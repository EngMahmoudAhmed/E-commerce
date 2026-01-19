import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { Providers } from "./app/providers";
// import { AuthProvider } from "./context/AuthContext";
import "./index.css";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
  </StrictMode>
);
