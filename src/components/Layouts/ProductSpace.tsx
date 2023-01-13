import React from "react"

import { IProduct } from "../../features/products/productsApi"
import { ProductCard } from "../Product/ProductCard"

export interface IProductSpaceProps {
  products?: IProduct[]
}

export function ProductSpace({ products }: IProductSpaceProps) {
  return (
    <div
      className="pt-2 grid gap-10 md:px-10 place-items-center"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      }}
    >
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
