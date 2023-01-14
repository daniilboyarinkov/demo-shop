import React, { useEffect, useState } from "react"

import { useSearchParams } from "react-router-dom"

import { Filters, ProductSpace, Pagination } from "../components"
import {
  ICategory,
  useGetPaginationProductsByCategoryQuery,
} from "../features/products/productsApi"

const itemsPerPage = 12

interface IParams {
  [str: string]: string
}

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState("")

  const [page, setPage] = useState(Number(searchParams?.get("page") ?? 1))
  const [category, setCategory] = useState<ICategory | string | null>(
    searchParams?.get("category")
  )

  const { data, error, isLoading } = useGetPaginationProductsByCategoryQuery({
    offset: itemsPerPage * (page - 1),
    limit: itemsPerPage,
    category: category,
    query: query,
  })

  const handleQueryChange = (q: string) => {
    setQuery(q)
    setPage(1)
  }

  const handlePageClick = (num: number) => {
    setPage(num)
  }

  useEffect(() => {
    const params: IParams = {}
    if (category)
      params["category"] =
        typeof category === "string" ? category : String(category.id)
    setSearchParams({
      ...params,
      page: String(page),
    })
  }, [category, page, setSearchParams])

  const handleSetCategory = (category: ICategory) => {
    setCategory(category)
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
      <div className="grid">
        <Filters
          setCategory={handleSetCategory}
          query={query}
          setQuery={setQuery}
        />
        <div className="grid place-items-center">
          Товаров нет. Приходите завтра
        </div>
      </div>
    )

  return (
    <>
      <Filters
        setCategory={handleSetCategory}
        query={query}
        setQuery={handleQueryChange}
      />
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
