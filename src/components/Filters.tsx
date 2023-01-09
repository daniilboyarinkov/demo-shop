import React from "react"

import { ShopSortFilters } from "../const/data-shop"
import { ChevronDownSVG } from "../svg/ChevronDownSVG"

// export interface IFiltersProps {}

export function Filters() {
  return (
    <div className="flex items-center justify-end last:mr-2">
      <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn m-1 w-52">
          <span className="lowercase">Сортировать по</span>
          <span className="m-1 -mr-1">
            <ChevronDownSVG />
          </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
        >
          {ShopSortFilters.map((s) => (
            <li key={s.id}>
              <a>{s.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
