import React, { useState } from "react"

import { useSearchParams } from "react-router-dom"

import { Filters, ProductSpace, Pagination } from "../components"
import {
  ICategory,
  useGetPaginationProductsByCategoryQuery,
} from "../features/products/productsApi"

const itemsPerPage = 12

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [page, setPage] = useState(Number(searchParams?.get("page") ?? 1))
  const [category, setCategory] = useState<ICategory | string | null>(
    searchParams?.get("category")
  )

  const { data, error, isLoading } = useGetPaginationProductsByCategoryQuery({
    offset: itemsPerPage * page,
    limit: itemsPerPage,
    category: category,
  })

  interface IParams {
    [str: string]: string
  }

  const handlePageClick = (num: number) => {
    setPage(num)
    const params: IParams = {}
    if (category)
      params["category"] =
        typeof category === "string" ? category : String(category.id)
    setSearchParams({
      ...params,
      page: String(num),
    })
  }

  const handleSetCategory = (category: ICategory) => {
    setCategory(category)
    const params: IParams = {}
    if (page) params["page"] = String(page)
    setSearchParams({
      ...params,
      category: String(category.id),
    })
  }

  if (isLoading)
    return (
      <div className="grid place-content-center w-full h-full">
        <progress className="progress w-56"></progress>
      </div>
    )

  // that actually does not work because router does just magic
  if (error) return <div>Error...</div>

  if (!data?.length)
    return (
      <div className="grid place-items-center">
        Товаров нет. Приходите завтра
      </div>
    )

  return (
    <>
      <Filters setCategory={handleSetCategory} />
      <ProductSpace products={data} />
      <Pagination
        onPageChange={handlePageClick}
        totalCount={200}
        currentPage={page}
        pageSize={itemsPerPage}
        siblingCount={0}
      />
    </>
  )
}
