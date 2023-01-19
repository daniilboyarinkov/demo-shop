import React, { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleAddToCart } from "../../features/cartSlice"
import { toggleAddToFavorites } from "../../features/favoriteSlice"
import { IProduct } from "../../features/products/productsApi"
import styles from "../../styles/ProductInfo.module.scss"
import CartSVG from "../../svg/cartSVG"
import HeartSVG from "../../svg/heartSVG"
import { ConvertCurrency } from "../../utils/ConvertCurrency"

type Props = {
  product?: IProduct
}

export const ProductInfo = ({ product }: Props) => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.cart.cart)
  const favorites = useAppSelector((state) => state.favorites.favorites)

  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false)

  useEffect(() => {
    if (!product) return
    console.log(products)
    const item = products.find((p: IProduct) => p.id === product.id)
    setIsAddedToCart(!!item)
  }, [products, product])

  useEffect(() => {
    if (!product) return
    const item = favorites.find((p: IProduct) => p.id === product.id)
    setIsAddedToFavorites(!!item)
  }, [favorites, product])

  const handleAddToCart = () => {
    if (product) dispatch(toggleAddToCart(product))
  }

  const handleAddToFavorite = () => {
    if (product) dispatch(toggleAddToFavorites(product))
  }

  return (
    <div className={styles["product-info"]}>
      <div>
        <h1 className={styles["product-info__title"]}>{product?.title}</h1>
        <p className={styles["product-info__prices"]}>
          <span className={styles["product-info__prices_new"]}>
            {ConvertCurrency(product?.price ?? 0)}
          </span>
          <del className={styles["product-info__prices_old"]}>
            {ConvertCurrency(Math.floor((product?.price ?? 0) * 1.25))}
          </del>
        </p>
        <div className={styles["product-info__CTA"]}>
          <button
            onClick={handleAddToCart}
            className={`btn btn-primary btn-wide ${
              isAddedToCart && "btn-accent"
            }`}
          >
            <CartSVG />
          </button>
          <button onClick={handleAddToFavorite} className="btn btn-secondary">
            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
            <HeartSVG filled={isAddedToFavorites} />
          </button>
        </div>
      </div>
      <div>
        <h3 className={styles["product-info__description"]}>Описание</h3>
        <p>{product?.description}</p>
      </div>
    </div>
  )
}
