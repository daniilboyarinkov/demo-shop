import React from "react"

import { IProduct } from "../features/products/productsApi"
import { ConvertCurrency } from "../utils/ConvertCurrency"

type Props = {
  product?: IProduct
}

export const ProductInfo = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex items-center">
        <span className="font-bold text-2xl py-2">
          {ConvertCurrency(product?.price ?? 0)}
        </span>
        <del className="ml-4 text">
          {ConvertCurrency(Math.floor((product?.price ?? 0) * 1.25))}
        </del>
      </p>
      <div>
        <h3 className="font-bold">Описание</h3>
        <p className="">{product?.description}</p>
      </div>
    </div>
  )
}
