import { configureStore } from "@reduxjs/toolkit"

import { productsApi } from "../features/products/productsApi"
import themeReducer from "../features/themeSlice"

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >
