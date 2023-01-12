import React from "react"

import { useParams } from "react-router-dom"

import { ProductPreview, ProductInfo, SuggestSection } from "../components"
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
      <div className="grid md:grid-cols-2">
        <ProductPreview images={product?.images ?? []} />
        <ProductInfo product={product} />
      </div>
      <div className="p-2 md:p-6 mt-10 max-w-[100vw]">
        <h1 className="text-xl mb-4">Вам может понравиться</h1>
        <SuggestSection
          currentId={product?.id ?? 0}
          category={product?.category.id ?? 1}
        />
      </div>
    </div>
  )
}
