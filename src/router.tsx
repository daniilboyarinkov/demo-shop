import React from "react"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import App from "./App"

import { EndPoints } from "./const/endpoints"
import {
  AboutUsPage,
  CartPage,
  CatalogPage,
  ConfidentialPage,
  ErrorPage,
  FavoritePage,
  HomePage,
  PaymentDeliveryPage,
  ProductPage,
  PublicOfferPage,
  ReturnPage,
} from "./pages"

export const JSXrouter = createBrowserRouter(
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
          path={EndPoints.Return}
          element={<ReturnPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={EndPoints.PaymentDelivery}
          element={<PaymentDeliveryPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={EndPoints.Confidential}
          element={<ConfidentialPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={EndPoints.PublicOffer}
          element={<PublicOfferPage />}
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
