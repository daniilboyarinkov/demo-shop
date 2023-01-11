import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

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

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], string>({
      query: () => `/products`,
    }),
    getProductById: builder.query<IProduct, number>({
      query: (productsId: number) => `/products/${productsId}`,
    }),
    getPaginationProducts: builder.query<IProduct[], IPaginate>({
      query: (pagination: IPaginate) =>
        `/products?offset=${pagination.offset}&limit=${pagination.limit}`,
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
} = productsApi
