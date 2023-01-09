import React from "react"

import { NavLink } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import { ShopData } from "../const/data-shop"
import { EndPoints } from "../const/endpoints"
import { set } from "../features/themeSlice"
import CartSVG from "../svg/cartSVG"
import HeartSVG from "../svg/heartSVG"
import LogoTempSVG from "../svg/LogoTempSVG"
import { ThemeToggleButtonSVG } from "../svg/ThemeToggleButtonSVG"

// export interface IHeaderProps {}

export function Header() {
  const theme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const handleThemeChange = () => {
    const next = theme === "dark" ? "light" : "dark"
    dispatch(set(next))
  }

  return (
    <header className="navbar bg-base-200 z-10">
      <div className="flex-1">
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">
          <LogoTempSVG />
          <span className="ml-1">{ShopData.name}</span>
        </NavLink>
      </div>
      <div className="flex-none">
        <NavLink className="btn btn-ghost btn-circle" to={EndPoints.Favorites}>
          <div className="indicator">
            <HeartSVG />
            <span className="badge badge-sm indicator-item">3</span>
          </div>
        </NavLink>

        <div className="dropdown dropdown-end">
          <label tabIndex={1} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <CartSVG />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={1}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <NavLink
                  className="btn btn-primary btn-block"
                  to={EndPoints.Cart}
                >
                  View cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn btn-ghost btn-circle"
          onClick={handleThemeChange}
        >
          <ThemeToggleButtonSVG theme={theme} />
        </button>
      </div>
    </header>
  )
}
