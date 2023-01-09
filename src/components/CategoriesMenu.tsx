import React from "react"

import { ShopCategories } from "../const/data-shop"

// export interface ICategoriesMenuProps {}

export function CategoriesMenu() {
  return (
    <ul className="menu bg-transparent w-56 p-2 rounded-box">
      <li className="menu-title">
        <span>Категория</span>
      </li>
      {ShopCategories.map((category) => (
        <li key={category.id} className="capitalize">
          <a>{category.title}</a>
        </li>
      ))}
    </ul>
  )
}
