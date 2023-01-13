import React from "react"

import { usePagination, DOTS } from "../../hooks/usePagination"

export interface IPagination {
  onPageChange: (num: number) => void
  totalCount: number
  currentPage: number
  pageSize: number
  siblingCount: number
}

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: IPagination) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange?.length ?? 0) < 2) return null

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = (paginationRange ?? [])[(paginationRange?.length ?? 0) - 1]

  return (
    <div className="btn-group justify-center py-4">
      {/* Left navigation arrow */}
      <button
        disabled={currentPage === 1}
        className={`btn`}
        onClick={onPrevious}
      >
        <div className="arrow left">«</div>
      </button>
      {paginationRange?.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <button key={index} className="btn">
              &#8230;
            </button>
          )
        }

        return (
          <button
            key={index}
            className={`btn ${pageNumber === currentPage && "btn-primary"}`}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </button>
        )
      })}
      {/*  Right Navigation arrow */}
      <button
        disabled={currentPage === lastPage}
        className={`btn`}
        onClick={onNext}
      >
        <div className="arrow right">»</div>
      </button>
    </div>
  )
}
