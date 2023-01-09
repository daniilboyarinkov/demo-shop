import React from "react"

import { ProductCard } from "./ProductCard"

// export interface IProductSpaceProps {}

export function ProductSpace() {
  return (
    <div
      className="p-4 pt-2 grid gap-10"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(385px, 1fr))",
      }}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
