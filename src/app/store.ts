import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "../features/cartSlice"
import favoriteReducer from "../features/favoriteSlice"
import { productsApi } from "../features/products/productsApi"
import themeReducer from "../features/themeSlice"

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    favorites: favoriteReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
