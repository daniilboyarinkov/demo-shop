import React from "react"

import {
  ICategory,
  useGetAllCategoriesQuery,
} from "../../features/products/productsApi"
import styles from "../../styles/menu.module.scss"
import { ChevronDownSVG } from "../../svg/ChevronDownSVG"

export interface ICategoriesMenuProps {
  setCategory: (category: ICategory) => void
}

export function CategoriesDropDown({ setCategory }: ICategoriesMenuProps) {
  const { data, isLoading, error } = useGetAllCategoriesQuery("")

  if (isLoading) return <div>loading...</div>
  if (error) return <div>error</div>

  return (
    <div
      className={
        styles["app-menu"] + " dropdown dropdown-bottom dropdown-hover"
      }
    >
      <label tabIndex={0} className="btn m-1 w-11/12 sm:w-52">
        <span className="lowercase">Категория</span>
        <span className="m-1 -mr-1">
          <ChevronDownSVG />
        </span>
      </label>
      <ul
        tabIndex={0}
        className={styles["app-menu__content"] + " dropdown-content"}
      >
        {data?.map((category) => (
          <li
            onClick={() => setCategory(category)}
            key={category.id}
            className="capitalize"
          >
            <a>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
