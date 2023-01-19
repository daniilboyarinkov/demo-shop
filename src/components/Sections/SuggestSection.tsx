import React from "react"

import {
  IProduct,
  useGetSuggestionProductsQuery,
} from "../../features/products/productsApi"
import styles from "../../styles/carousel.module.scss"
import { ProductCard } from "../Product/ProductCard"

type Props = {
  currentId: number
  category: number
}

export const SuggestSection = ({ category, currentId }: Props) => {
  const { data, isLoading, error } = useGetSuggestionProductsQuery(category)

  if (isLoading)
    return (
      <div className="">
        <progress className="progress w-56"></progress>
      </div>
    )
  if (error) return <div>error</div>

  return (
    <div className={styles["app-carousel"]}>
      {data
        ?.filter((x) => x.id !== currentId)
        ?.map((product: IProduct) => (
          <div key={product.id} className={styles["app-carousel-item"]}>
            <ProductCard product={product} />
          </div>
        ))}
    </div>
  )
}
