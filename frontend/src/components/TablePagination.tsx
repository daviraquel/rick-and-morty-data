import React from "react"

interface TablePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxPageNumbersToShow = 5
    const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2)

    let startPage = Math.max(1, currentPage - halfMaxPageNumbersToShow)
    let endPage = Math.min(totalPages, currentPage + halfMaxPageNumbersToShow)

    if (currentPage <= halfMaxPageNumbersToShow) {
      endPage = Math.min(totalPages, maxPageNumbersToShow)
    }

    if (currentPage + halfMaxPageNumbersToShow >= totalPages) {
      startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded ${
            currentPage === i
              ? "bg-portalGreen text-darkBackground"
              : "bg-gray-700 text-white"
          } hover:bg-rickBlue hover:text-white transition-colors duration-200`}
        >
          {i}
        </button>
      )
    }

    if (startPage > 1) {
      pageNumbers.unshift(
        <span key="start-ellipsis" className="px-3 py-1">
          ...
        </span>
      )
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <span key="end-ellipsis" className="px-3 py-1">
          ...
        </span>
      )
    }

    return pageNumbers
  }

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-rickBlue hover:text-white transition-colors duration-200 disabled:opacity-50"
      >
        Previous
      </button>
      <div className="flex space-x-2">{renderPageNumbers()}</div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-rickBlue hover:text-white transition-colors duration-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}
