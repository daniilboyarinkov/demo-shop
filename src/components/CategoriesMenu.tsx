import React from "react"

import { useGetAllCategoriesQuery } from "../features/products/productsApi"
import { ChevronDownSVG } from "../svg/ChevronDownSVG"

// export interface ICategoriesMenuProps {}

export function CategoriesDropDown() {
  const { data, isLoading, error } = useGetAllCategoriesQuery("")

  if (isLoading) return <div>loading...</div>
  if (error) return <div>error</div>

  return (
    <div className="dropdown dropdown-bottom w-full flex justify-center sm:justify-start">
      <label tabIndex={0} className="btn m-1 w-11/12 sm:w-52">
        <span className="lowercase">Категория</span>
        <span className="m-1 -mr-1">
          <ChevronDownSVG />
        </span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-11/12 md:w-52"
      >
        {data?.map((category) => (
          <li key={category.id} className="capitalize">
            <a>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
