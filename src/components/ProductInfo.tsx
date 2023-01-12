import React from "react"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import { toggleAddToCart } from "../features/cartSlice"
import { toggleAddToFavorites } from "../features/favoriteSlice"
import { IProduct } from "../features/products/productsApi"
import CartSVG from "../svg/cartSVG"
import HeartSVG from "../svg/heartSVG"
import { ConvertCurrency } from "../utils/ConvertCurrency"

type Props = {
  product?: IProduct
}

export const ProductInfo = ({ product }: Props) => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.cart.cart)
  const favorites = useAppSelector((state) => state.favorites.favorites)

  const handleAddToCart = () => {
    if (product) dispatch(toggleAddToCart(product))
  }

  const handleAddToFavorite = () => {
    if (product) dispatch(toggleAddToFavorites(product))
  }

  return (
    <div className="flex flex-col gap-4 justify-around px-2 py-10 md:px-10">
      <div>
        <h1 className="text-2xl">{product?.title}</h1>
        <p className="flex items-center">
          <span className="font-bold text-2xl py-2">
            {ConvertCurrency(product?.price ?? 0)}
          </span>
          <del className="ml-4 text">
            {ConvertCurrency(Math.floor((product?.price ?? 0) * 1.25))}
          </del>
        </p>
        <div className="flex justify-around max-w-[320px] mt-4">
          <button
            onClick={handleAddToCart}
            className={`btn btn-primary btn-wide ${
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              products.includes(product!) && "btn-accent"
            }`}
          >
            <CartSVG />
          </button>
          <button onClick={handleAddToFavorite} className="btn btn-secondary">
            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
            <HeartSVG filled={favorites.includes(product!)} />
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-bold">Описание</h3>
        <p className="">{product?.description}</p>
      </div>
    </div>
  )
}
