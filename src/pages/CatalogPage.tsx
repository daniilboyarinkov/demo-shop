import React from "react"

import { CategoriesMenu, Filters, ProductSpace } from "../components"
import { useGetAllProductsQuery } from "../features/products/productsApi"

export function CatalogPage() {
  const { data, error, isLoading } = useGetAllProductsQuery("")

  if (isLoading) return <div>loading...</div>
  if (error) return <div>Error...</div>

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "auto 1fr auto",
      }}
    >
      <CategoriesMenu />
      <div
        className="grid mt-1"
        style={{
          gridTemplateRows: "auto 1fr",
        }}
      >
        <Filters />
        <ProductSpace products={data} />
        Pagination
      </div>
    </div>
  )
}
