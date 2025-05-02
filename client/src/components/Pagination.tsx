// components/Pagination.tsx
import React from "react";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex header justify-center my-4 gap-2">
      <button
        className="cursor-pointer pagination-item bg-gray-700 text-white rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        Orqaga
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`pagination-item rounded cursor-pointer ${
            currentPage === page
              ? "bg-green-600"
              : "bg-gray-300 text-black cursor-pointer"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        className="cursor-pointer pagination-item bg-gray-700 text-white rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        Oldinga
      </button>
    </div>
  );
};

export default Pagination;
