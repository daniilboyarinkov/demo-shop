import React from "react"

import { useParams } from "react-router-dom"

import { ProductPreview, ProductInfo } from "../components"
import { useGetProductByIdQuery } from "../features/products/productsApi"

export function ProductPage() {
  const { productId } = useParams()
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(Number(productId))

  if (isLoading)
    return (
      <div className="grid place-content-center w-full h-full">
        <progress className="progress w-56"></progress>
      </div>
    )
  if (error) return <div>error</div>

  return (
    <div>
      {/* ProductPreview ProductInfo SuggestSection */}
      <h1 className="text-2xl m-2">{product?.title}</h1>
      <div className="grid place-items-center md:grid-cols-2">
        <ProductPreview images={product?.images ?? []} />
        <ProductInfo product={product} />
      </div>
    </div>
  )
}
