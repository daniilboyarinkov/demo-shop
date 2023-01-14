import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { randomIntFromInterval } from "../../utils/randomIntFromInterval"

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: ICategory
  images: string[]
}

export interface ICategory {
  id: number
  name: string
  image: string
}

export interface IPaginate {
  offset: number
  limit: number
}

export interface IPaginateCategory {
  offset: number
  limit: number
  category?: ICategory | string | null
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], string>({
      query: () => `/products`,
    }),
    getSuggestionProducts: builder.query<IProduct[], number>({
      query: (category) =>
        `/categories/${category}/products?offset=${randomIntFromInterval(
          0,
          10
        )}&limit=${6}`,
    }),
    getProductById: builder.query<IProduct, number>({
      query: (productsId: number) => `/products/${productsId}`,
    }),
    getPaginationProducts: builder.query<IProduct[], IPaginate>({
      query: (pagination: IPaginate) =>
        `/products?offset=${pagination.offset}&limit=${pagination.limit}`,
    }),
    getPaginationProductsByCategory: builder.query<
      IProduct[],
      IPaginateCategory
    >({
      query: (pagination: IPaginateCategory) => {
        if (!pagination.category)
          return `/products?offset=${pagination.offset}&limit=${pagination.limit}`

        if (typeof pagination.category === "string")
          return `/categories/${pagination?.category}/products?offset=${pagination.offset}&limit=${pagination.limit}`

        return `/categories/${pagination?.category?.id}/products?offset=${pagination.offset}&limit=${pagination.limit}`
      },
    }),
    getAllCategories: builder.query<ICategory[], string>({
      query: () => `/categories`,
    }),
  }),
})

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetPaginationProductsQuery,
  useGetAllCategoriesQuery,
  useGetSuggestionProductsQuery,
  useGetPaginationProductsByCategoryQuery,
} = productsApi
