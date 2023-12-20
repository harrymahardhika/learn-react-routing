import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { useDocumentTitle } from '@/hooks'
import Sidebar from './Sidebar'

const AdminLayout = () => {
  useDocumentTitle('Admin Dashboard')

  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }

    document.body.classList.add('bg-gray-50')
    document.documentElement.classList.remove('h-full')
    document.body.classList.remove('bg-gray-100', 'h-full', 'py-16')

    return () => {
      document.body.classList.remove('bg-gray-50')
      document.documentElement.classList.add('h-full')
      document.body.classList.add('bg-gray-100', 'h-full', 'py-16')
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar-dark"
            aria-controls="application-sidebar-dark"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>

      <div
        id="application-sidebar-dark"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
      >
        <div className="px-6">
          <Link
            className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
            to="/admin"
            aria-label="Brand"
          >
            Brand
          </Link>
        </div>

        <Sidebar />
      </div>

      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout
