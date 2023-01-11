import React from "react"

import { NavLink } from "react-router-dom"

import { IProduct } from "../features/products/productsApi"
// import CartSVG from "../svg/cartSVG"
import HeartSVG from "../svg/heartSVG"

export interface IProductCard {
  product: IProduct
}

export function ProductCard({ product }: IProductCard) {
  return (
    <div
      className="relative card card-compact bg-base-100 shadow-xl grid"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <NavLink to={`/catalog/${product.id}`}>
        <figure className="relative">
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-base-100"></div>
          <img
            src={product.images[0]}
            alt="Shoes"
            className="h-[320px] w-full object-cover rounded-lg"
          />
        </figure>
      </NavLink>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title max-w-[210px]">{product.title}</h2>
          <b className="self-start">
            {product.price} <span>₽</span>
          </b>
        </div>

        {/* уведомление о товарах новой коллекции. */}
        {/* убрана ввиду нереализованного (пока что) функционала */}
        {/* <div className="flex items-center justify-between">
          <em className="text-accent text-2xl">
            <span>Новая коллекция!</span>
          </em>
        </div> */}
      </div>

      {/* возможность добавления напрямую в корзину. */}
      {/* убрана по эстетическим соображением */}
      {/* <div className="flex justify-end">
        <button className="btn btn-primary m-3 w-3/4 self-end opacity-40 hover:opacity-100">
          <CartSVG />
        </button>
      </div> */}

      <button className="absolute top-0 right-0 btn btn-secondary flex items-center justify-center rounded-none rounded-tr-lg rounded-bl-lg">
        <HeartSVG />
      </button>
    </div>
  )
}
