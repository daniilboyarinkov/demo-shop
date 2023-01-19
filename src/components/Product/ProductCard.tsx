import React, { useEffect, useState } from "react"

import { NavLink } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleAddToFavorites } from "../../features/favoriteSlice"
import { IProduct } from "../../features/products/productsApi"
// import CartSVG from "../svg/cartSVG"
import styles from "../../styles/ProductCard.module.scss"
import HeartSVG from "../../svg/heartSVG"
import { ConvertCurrency } from "../../utils/ConvertCurrency"

export interface IProductCard {
  product: IProduct
}

export function ProductCard({ product }: IProductCard) {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector((state) => state.favorites.favorites)

  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false)

  const handleAddToFavorite = () => {
    if (product) dispatch(toggleAddToFavorites(product))
  }

  useEffect(() => {
    const item = favorites.find((p: IProduct) => p.id === product.id)
    setIsAddedToFavorites(!!item)
  }, [favorites, product])

  return (
    <div className={styles["product-card"]}>
      <NavLink to={`/catalog/${product.id}`}>
        <figure className="relative">
          <div className={styles["product-card__gradient"]} />
          <img
            src={product.images[0]}
            alt="Shoes"
            className={styles["product-card__img"]}
          />
        </figure>
      </NavLink>
      <div className={styles["product-card__body"]}>
        <div className="flex items-center justify-between">
          <h2 className={styles["product-card__body__title"]}>
            {product.title}
          </h2>
          <b className={styles["product-card__body__price"]}>
            {ConvertCurrency(product.price)}
          </b>
        </div>

        {/* уведомление о товарах новой коллекции. */}
        {/* убрана ввиду нереализованного (пока что) функционала */}
        {/* <div className="flex items-center justify-between">
          <em className="text-accent text-2xl">
            <span>Новая коллекция!</span>
          </em>
        </div> */}
      </div>

      {/* возможность добавления напрямую в корзину. */}
      {/* убрана по эстетическим соображением */}
      {/* <div className="flex justify-end">
        <button className="btn btn-primary m-3 w-3/4 self-end opacity-40 hover:opacity-100">
          <CartSVG />
        </button>
      </div> */}

      <button
        onClick={handleAddToFavorite}
        className={styles["product-card__like-btn"]}
      >
        <HeartSVG filled={isAddedToFavorites} />
      </button>
    </div>
  )
}
