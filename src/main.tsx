import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Menu from "./pages/Menu/menu.tsx";
import Recipes from "./pages/Recipes/recipes.tsx";
import Ingredients from "./pages/Ingredients/ingredients.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/ingredients",
    element: <Ingredients />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CssBaseline />
  </React.StrictMode>
);
