import React from "react"

import "./index.css"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

// import App from "./App"
import App from "./App"
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

const container = document.getElementById("root")
if (!container) throw new Error("Could not find root element with id 'root'")
const root = createRoot(container)

const JSXrouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={EndPoints.Root}
        element={<App />}
        errorElement={<ErrorPage />}
      >
        <Route
          path={EndPoints.Root}
          element={<HomePage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={EndPoints.About}
          element={<AboutUsPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={EndPoints.Cart}
          element={<CartPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={EndPoints.Catalog}
          element={<CatalogPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={EndPoints.Favorites}
          element={<FavoritePage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={EndPoints.Product}
          element={<ProductPage />}
          errorElement={<ErrorPage />}
        />
      </Route>
    </>
  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={JSXrouter} />
    </Provider>
  </React.StrictMode>
)
