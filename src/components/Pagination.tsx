import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  paginate,
  currentPage,
}) => {
  const [inputPage, setInputPage] = useState(currentPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(Number(e.target.value));
  };

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    paginate(inputPage);
  };

  return (
    <nav className="mt-4">
      <ul className="flex justify-center items-center">
        <li className="mx-1">
          <button
            onClick={() => paginate(currentPage - 1)}
            className="px-3 py-1 border rounded"
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li className="mx-1">
          <form onSubmit={handlePageSubmit} className="flex items-center">
            <input
              type="number"
              value={inputPage}
              onChange={handleInputChange}
              className="w-12 text-center border rounded"
              min="1"
              max={totalPages}
            />
            <button type="submit" className="ml-2 px-3 py-1 border rounded">
              Go
            </button>
          </form>
        </li>
        <li className="mx-1">
          <button
            onClick={() => paginate(currentPage + 1)}
            className="px-3 py-1 border rounded"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
