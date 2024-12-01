import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routs from "./Layout/Routs.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProviders } from "./Components/Pages/Providers/AuthProviders.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <NextUIProvider>
        <RouterProvider router={Routs}></RouterProvider>
      </NextUIProvider>
    </AuthProviders>
  </StrictMode>
);
