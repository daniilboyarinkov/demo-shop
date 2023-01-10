import React from "react"

import { Filters, ProductSpace } from "../components"
import { useGetAllProductsQuery } from "../features/products/productsApi"

export function CatalogPage() {
  const { data, error, isLoading } = useGetAllProductsQuery("")

  if (isLoading)
    return (
      <div className="grid place-content-center w-full h-full">
        <progress className="progress w-56"></progress>
      </div>
    )

  // that actually does not work because router does just magic
  if (error) return <div>Error...</div>

  return (
    <>
      <Filters />
      <ProductSpace products={data} />
      Pagination
    </>
  )
}
