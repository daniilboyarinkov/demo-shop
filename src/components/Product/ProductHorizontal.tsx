import React from "react"

import { NavLink } from "react-router-dom"

import { IProduct } from "../../features/products/productsApi"
import styles from "../../styles/ProductHorizontal.module.scss"
import { TrashBinSVG } from "../../svg/TrashBinSVG"
import { ConvertCurrency } from "../../utils/ConvertCurrency"

type Props = {
  product: IProduct
  handleDeleteProduct: (product: IProduct) => void
}

export const ProductHorizontal = ({ product, handleDeleteProduct }: Props) => {
  return (
    <div className={styles["products-horizontal"]}>
      <div className="flex justify-between pb-4 sm:pb-0 gap-4 sm:w-5/6">
        <NavLink to={`/catalog/${product.id}`}>
          <img
            className={styles["products-horizontal__img"]}
            src={product.images[0]}
            alt="preview"
          />
        </NavLink>
        <p className={styles["products-horizontal__title"]}>{product.title}</p>

        <p className={styles["products-horizontal__price"]}>
          {ConvertCurrency(product.price)}
        </p>
      </div>
      <button
        className={styles["products-horizontal__btn"]}
        onClick={() => handleDeleteProduct(product)}
      >
        <TrashBinSVG />
      </button>
    </div>
  )
}
