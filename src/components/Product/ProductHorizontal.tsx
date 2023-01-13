import React from "react"

import { NavLink } from "react-router-dom"

import { IProduct } from "../../features/products/productsApi"
import { TrashBinSVG } from "../../svg/TrashBinSVG"
import { ConvertCurrency } from "../../utils/ConvertCurrency"

type Props = {
  product: IProduct
  handleDeleteProduct: (product: IProduct) => void
}

export const ProductHorizontal = ({ product, handleDeleteProduct }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:max-h-[120px] border-b border-base-200 p-4 sm:w-5/6 md:w-3/4 self-center">
      <div className="flex justify-between pb-4 sm:pb-0 gap-4 sm:w-5/6">
        <NavLink to={`/`}>
          <img
            className="max-w-[95px] object-cover sm:self-center rounded"
            src={product.images[0]}
            alt="preview"
          />
        </NavLink>
        <p className="self-start sm:self-center">{product.title}</p>

        <p className="font-bold self-end sm:self-center">
          {ConvertCurrency(product.price)}
        </p>
      </div>
      <button
        className="btn sm:self-center"
        onClick={() => handleDeleteProduct(product)}
      >
        <TrashBinSVG />
      </button>
    </div>
  )
}
