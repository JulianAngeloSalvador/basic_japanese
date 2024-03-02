import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "unfonts.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  { path: "/", Component: Root, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
