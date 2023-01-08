import axios from "axios"
import React from "react"
import { useLoaderData, useNavigation } from "react-router-dom"

import delay from "../temp/delay"

// export interface IProductPageProps {}

export async function loader({ params }) {
  // const product = axios.get("https://fakestoreapi.com/products/1")
  // await delay(2100)

  // return product
  const data = { some: "thing" }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  })
}

export function ProductPage() {
  const product = useLoaderData()
  const navigation = useNavigation()
  console.log(navigation.state)

  return (
    <div className={`${navigation.state === "loading" && "text-red-700"}`}>
      ProductPreview ProductInfo SuggestSection
    </div>
  )
}
