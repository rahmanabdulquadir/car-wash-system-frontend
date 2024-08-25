import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import ProviderContainer from "./components/provider/ProviderContainer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderContainer>
      <RouterProvider router={router} />
    </ProviderContainer>
  </StrictMode>
);
