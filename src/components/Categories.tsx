import React from "react"

import { NavLink } from "react-router-dom"

import { ShopCategories } from "../const/data-shop"

// export interface ICategoriesProps {}

export function Categories() {
  return (
    <div className="carousel rounded-box max-h-[480px] mt-40">
      {ShopCategories.map((category) => (
        <div key={category.id} className="carousel-item max-w-[480px] m-1">
          <figure className="relative">
            <NavLink to={"/"}>
              <img
                src={category.image}
                alt={category.title}
                className="sepia-[50%] h-full w-full object-cover rounded"
              />
            </NavLink>
            <figcaption className="w-full absolute bottom-1 left-1/2 -translate-x-1/2 text-center">
              <h1 className="text-3xl capitalize text-white font-extrabold">
                {category.title}
              </h1>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  )
}
