import React from "react";
import ReactDOM from "react-dom/client";
import CharacterSheet from "./CharacterSheet";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <CharacterSheet /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
