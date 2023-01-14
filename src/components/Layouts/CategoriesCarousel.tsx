import React from "react"

import { NavLink } from "react-router-dom"

import { useGetAllCategoriesQuery } from "../../features/products/productsApi"

// export interface ICategoriesProps {}

export function CategoriesCarousel() {
  const { data, isLoading, error } = useGetAllCategoriesQuery("")

  if (isLoading)
    return (
      <div className="grid place-content-center w-full h-full">
        <progress className="progress w-56"></progress>
      </div>
    )
  if (error) return <div>error</div>

  return (
    <div className="carousel gap-2 rounded-box mt-40">
      {data?.map(
        (category) =>
          category.image && (
            <div key={category.id} className="carousel-item">
              <figure className="relative w-full">
                <NavLink to={`/catalog?category=${category.id}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover rounded"
                  />
                </NavLink>
                <figcaption className="w-full absolute bottom-1 left-1/2 -translate-x-1/2 text-center">
                  <h1 className="text-3xl capitalize text-primary font-extrabold">
                    {category.name}
                  </h1>
                </figcaption>
              </figure>
            </div>
          )
      )}
    </div>
  )
}
