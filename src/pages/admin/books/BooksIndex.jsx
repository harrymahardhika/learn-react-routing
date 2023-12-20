import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const BooksIndex = () => {
  return (
    <>
      <ol
        className="flex items-center whitespace-nowrap mb-3 bg-gray-100 p-3 rounded"
        aria-label="Breadcrumb"
      >
        <li className="inline-flex items-center">
          <Link
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
            to="/admin"
          >
            Dashboard
          </Link>
          <ChevronRight size={14} />
        </li>
        <li
          className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
          aria-current="page"
        >
          Books
        </li>
      </ol>

      <h1>Books</h1>
    </>
  )
}

export default BooksIndex
