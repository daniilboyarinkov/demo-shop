// eslint-disable-next-line import/named
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IProduct } from "./products/productsApi"

export interface ICart {
  cart: IProduct[]
  amount: number
  subtotal: number
}

const initialState: ICart = {
  cart: [],
  amount: 0,
  subtotal: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleAddToCart: (state, action: PayloadAction<IProduct>) => {
      const item = state.cart.find(
        (item: IProduct) => item.id === action.payload.id
      )

      if (item) {
        const filteredCart = state.cart.filter(
          (item: IProduct) => item.id !== action.payload.id
        )
        state.cart = filteredCart
        state.subtotal -= action.payload.price
        state.amount--
      } else {
        state.cart.push(action.payload)
        state.subtotal += action.payload.price
        state.amount++
      }
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const item = state.cart.find(
        (item: IProduct) => item.id === action.payload.id
      )

      if (!item) {
        state.cart.push(action.payload)
        state.subtotal += action.payload.price
        state.amount++
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const filteredCart = state.cart.filter(
        (item: IProduct) => item.id !== action.payload.id
      )
      state.cart = filteredCart
      state.subtotal -= action.payload.price
      state.amount--
    },
  },
})

export const { addToCart, removeFromCart, toggleAddToCart } = cartSlice.actions
export default cartSlice.reducer
