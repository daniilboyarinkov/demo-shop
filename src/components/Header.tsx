import React from "react"

import { NavLink } from "react-router-dom"

import { ShopData } from "../const/data-shop"
import { EndPoints } from "../const/endpoints"
import CartSVG from "../svg/cartSVG"
import HeartSVG from "../svg/heartSVG"
import LogoTempSVG from "../svg/LogoTempSVG"

// export interface IHeaderProps {}

export default function Header() {
  return (
    <header className="navbar bg-base-200">
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
      </div>
    </header>
  )
}
