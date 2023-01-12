// eslint-disable-next-line import/named
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IProduct } from "./products/productsApi"

export interface IFavorites {
  favorites: IProduct[]
  amount: number
}

const initialState: IFavorites = {
  favorites: [],
  amount: 0,
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleAddToFavorites: (state, action: PayloadAction<IProduct>) => {
      const item = state.favorites.find(
        (item: IProduct) => item.id === action.payload.id
      )

      if (item) {
        const filteredFavorites = state.favorites.filter(
          (item: IProduct) => item.id !== action.payload.id
        )
        state.favorites = filteredFavorites
        state.amount--
      } else {
        state.favorites.push(action.payload)
        state.amount++
      }
    },
    addToFavorites: (state, action: PayloadAction<IProduct>) => {
      const item = state.favorites.find(
        (item: IProduct) => item.id === action.payload.id
      )

      if (!item) {
        state.favorites.push(action.payload)
        state.amount++
      }
    },
    removeFromFavorites: (state, action: PayloadAction<IProduct>) => {
      const filteredFavorites = state.favorites.filter(
        (item: IProduct) => item.id !== action.payload.id
      )
      state.favorites = filteredFavorites
      state.amount--
    },
  },
})

export const { addToFavorites, removeFromFavorites, toggleAddToFavorites } =
  favoritesSlice.actions
export default favoritesSlice.reducer
