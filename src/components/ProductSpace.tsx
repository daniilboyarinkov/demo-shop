import React from "react"

import { ProductCard } from "./ProductCard"

import { Product } from "../features/products/productsApi"

export interface IProductSpaceProps {
  products?: Product[]
}

export function ProductSpace({ products }: IProductSpaceProps) {
  return (
    <div
      className="p-4 pt-2 grid gap-10"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(385px, 1fr))",
      }}
    >
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
