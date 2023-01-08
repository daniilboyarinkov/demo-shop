import React from "react"
import { useLoaderData } from "react-router-dom"

import delay from "../temp/delay"

// export interface ICatalogPageProps {}

export async function loader() {
  // await delay(1000)
  const data = { some: "thing" }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  })
  // return { asf: "asfdsa" }
}

export function CatalogPage() {
  const products: any = useLoaderData()

  return (
    <>
      <div>CategoriesDrawer Filters ProductSpace</div>
      <div>{JSON.stringify(products)}</div>
    </>
  )
}
