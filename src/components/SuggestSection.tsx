import React from "react"

import { ProductCard } from "./ProductCard"

import {
  IProduct,
  useGetSuggestionProductsQuery,
} from "../features/products/productsApi"

type Props = {
  currentId: number
  category: number
}

export const SuggestSection = ({ category, currentId }: Props) => {
  const { data, isLoading, error } = useGetSuggestionProductsQuery(category)

  if (isLoading)
    return (
      <div className="grid place-content-center w-full h-full">
        <progress className="progress w-56"></progress>
      </div>
    )
  if (error) return <div>error</div>

  return (
    <div className="carousel gap-2 rounded-box">
      {data
        ?.filter((x) => x.id !== currentId)
        ?.map((product: IProduct) => (
          <div key={product.id} className="carousel-item">
            <ProductCard product={product} />
          </div>
        ))}
    </div>
  )
}
