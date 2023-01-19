import React from "react"

import { IProduct } from "../../features/products/productsApi"
import styles from "../../styles/ProductSpace.module.scss"
import { ProductCard } from "../Product/ProductCard"

export interface IProductSpaceProps {
  products?: IProduct[]
}

export function ProductSpace({ products }: IProductSpaceProps) {
  return (
    <div className={styles["product-space"]}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
