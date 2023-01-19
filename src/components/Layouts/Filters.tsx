import React from "react"

import { ICategory } from "../../features/products/productsApi"
import styles from "../../styles/Filters.module.scss"
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
    <div className={styles.filters}>
      <CategoriesDropDown setCategory={setCategory} />
      <div className="py-2 sm:py-0 sm:px-4 mr-6 md:mr-0 self-end">
        {/* <SortByDropDown /> */}
        <Search query={query} setQuery={setQuery} />
      </div>
    </div>
  )
}
