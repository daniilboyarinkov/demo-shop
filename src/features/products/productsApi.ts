import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Product {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], string>({
      query: () => `/products`,
    }),
    getProductById: builder.query<Product, number>({
      query: (productsId: number) => `products/${productsId}`,
    }),
  }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi
