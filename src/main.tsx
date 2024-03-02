import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "unfonts.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";

const router = createBrowserRouter([
  { path: "/", Component: Root, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
