import React from "react"

import { NavLink } from "react-router-dom"

import { Product } from "../features/products/productsApi"
import CartSVG from "../svg/cartSVG"
import HeartSVG from "../svg/heartSVG"

export interface IProductCard {
  product: Product
}

export function ProductCard({ product }: IProductCard) {
  return (
    <div
      className="card card-compact bg-base-100 shadow-xl grid"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <NavLink to={`/catalog/${product.id}`}>
        <figure className="relative">
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-base-100"></div>
          <img
            src={product.image}
            alt="Shoes"
            className="h-[320px] w-full object-cover rounded"
          />
        </figure>
      </NavLink>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title max-w-[210px]">{product.title}</h2>
          <b>
            {product.price} <span>₽</span>
          </b>
        </div>

        <div className="flex items-center justify-between">
          <em className="text-secondary text-2xl">
            {/* <span>Новая коллекция!</span> */}
          </em>
        </div>
      </div>

      <div className="flex justify-between card-actions m-2">
        <button>
          <div className="btn btn-secondary opacity-60 flex items-center justify-center">
            <HeartSVG />
          </div>
        </button>

        <button className="btn btn-primary btn-wide">
          <CartSVG />
        </button>
      </div>
    </div>
  )
}
