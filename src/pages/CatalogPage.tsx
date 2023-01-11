import React, { useState } from "react"

import { Filters, ProductSpace, Pagination } from "../components"
import { useGetPaginationProductsQuery } from "../features/products/productsApi"

const itemsPerPage = 12

export function CatalogPage() {
  const [page, setPage] = useState(1)

  const { data, error, isLoading } = useGetPaginationProductsQuery({
    offset: itemsPerPage * page,
    limit: itemsPerPage,
  })

  const handlePageClick = (num: number) => {
    setPage(num)
  }

  if (isLoading)
    return (
      <div className="grid place-content-center w-full h-full">
        <progress className="progress w-56"></progress>
      </div>
    )

  // that actually does not work because router does just magic
  if (error) return <div>Error...</div>

  return (
    <>
      <Filters />
      <ProductSpace products={data} />
      <Pagination
        onPageChange={handlePageClick}
        totalCount={200}
        currentPage={page}
        pageSize={itemsPerPage}
        siblingCount={1}
      />
    </>
  )
}
