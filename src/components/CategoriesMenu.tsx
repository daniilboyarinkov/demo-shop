import React from "react"

import { ShopCategories } from "../const/data-shop"
import { ChevronDownSVG } from "../svg/ChevronDownSVG"

// export interface ICategoriesMenuProps {}

export function CategoriesDropDown() {
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
        {ShopCategories.map((category) => (
          <li key={category.id} className="capitalize">
            <a>{category.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
