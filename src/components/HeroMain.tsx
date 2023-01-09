import React from "react"

import { NavLink } from "react-router-dom"

import { ShopData } from "../const/data-shop"
import { EndPoints } from "../const/endpoints"

// export interface IHeroMainProps {}

export function HeroMain() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{ShopData.name}</h1>
          <p className="mb-5 text-center">{ShopData.slogan}</p>
          <NavLink to={EndPoints.Catalog}>
            <button className="btn btn-primary">B каталог!</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
