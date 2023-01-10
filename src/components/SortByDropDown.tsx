import React from "react"

import { ShopSortFilters } from "../const/data-shop"
import { ChevronDownSVG } from "../svg/ChevronDownSVG"

// type Props = {}

export const SortByDropDown = () => {
  return (
    <div className="dropdown dropdown-bottom w-full flex justify-center">
      <label tabIndex={0} className="btn m-1 w-11/12 sm:w-52">
        <span className="lowercase">Сортировать по</span>
        <span className="m-1 -mr-1">
          <ChevronDownSVG />
        </span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-11/12 md:w-52"
      >
        {ShopSortFilters.map((s) => (
          <li key={s.id}>
            <a>{s.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
