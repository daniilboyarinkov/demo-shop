import React from "react"

import { ICategory } from "../../features/products/productsApi"
import { CategoriesDropDown } from "../Controls/CategoriesMenu"
import { Search } from "../Controls/Search"
// import { SortByDropDown } from "../Controls/SortByDropDown"

export interface IFiltersProps {
  setCategory: (category: ICategory) => void
  query: string
  setQuery: (query: string) => void
}

export function Filters({ setCategory, query, setQuery }: IFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between bg-base-200 mb-4 py-6">
      <CategoriesDropDown setCategory={setCategory} />
      <div className="flex flex-col sm:flex-row items-end sm:items-center sm:last:mr-2">
        {/* <SortByDropDown /> */}
        <Search query={query} setQuery={setQuery} />
      </div>
    </div>
  )
}
