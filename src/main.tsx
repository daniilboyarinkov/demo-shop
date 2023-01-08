import React from "react"

import "./index.css"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import App from "./App"
import { store } from "./app/store"
import { EndPoints } from "./const/endpoints"
import {
  AboutUsPage,
  CartPage,
  CatalogPage,
  ErrorPage,
  FavoritePage,
  HomePage,
  ProductPage,
} from "./pages"
import { loader as catalogLoader } from "./pages/CatalogPage"
import { loader as rootLoader } from "./pages/HomePage"
import { loader as productLoader } from "./pages/ProductPage"

const container = document.getElementById("root")

if (!container) throw new Error("Could not find root element with id 'root'")

const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: EndPoints.Root,
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: EndPoints.About,
    element: <AboutUsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: EndPoints.Cart,
    element: <CartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: EndPoints.Catalog,
    element: <CatalogPage />,
    errorElement: <ErrorPage />,
    loader: catalogLoader,
  },
  {
    path: EndPoints.Favorites,
    element: <FavoritePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: EndPoints.Product,
    element: <ProductPage />,
    errorElement: <ErrorPage />,
    loader: productLoader,
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
