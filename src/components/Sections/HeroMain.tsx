import React from "react"

import { NavLink } from "react-router-dom"

import { ShopData } from "../../const/data-shop"
import { EndPoints } from "../../const/endpoints"

// export interface IHeroMainProps {}

const bgImg =
  "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

export function HeroMain() {
  return (
    <div
      className={`hero min-h-screen bg-[url('${bgImg}')]`}
      // style={{
      //   backgroundImage: `url("")`,
      // }}
    >
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
