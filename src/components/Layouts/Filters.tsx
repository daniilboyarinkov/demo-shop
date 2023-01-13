import React from "react"

import { CategoriesDropDown } from "../Controls/CategoriesMenu"
import { Search } from "../Controls/Search"
import { SortByDropDown } from "../Controls/SortByDropDown"

// export interface IFiltersProps {}

export function Filters() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between bg-base-200 mb-4 py-6">
      <CategoriesDropDown />
      <div className="flex flex-col sm:flex-row items-end sm:items-center sm:last:mr-2">
        <SortByDropDown />
        <Search />
      </div>
    </div>
  )
}
