import React from "react"

import { CategoriesMenu, Filters, ProductSpace } from "../components"

export function CatalogPage() {
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
        <ProductSpace />
        Pagination
      </div>
    </div>
  )
}
