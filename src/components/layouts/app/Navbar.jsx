import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const Navbar = () => {
  const { isAuthenticated } = useAuth()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Books', path: '/books' }
  ]

  isAuthenticated
    ? navLinks.push({ label: 'Admin', path: '/admin' })
    : navLinks.push({ label: 'Login', path: '/login' })

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-100 py-4 dark:bg-gray-800">
      <div className="container mx-auto">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between brand">
            <NavLink className="flex-none text-xl font-semibold dark:text-white" to="/">
              Brand
            </NavLink>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <Menu className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" />
                <X className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" />
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-gray-600">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  className="font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to={link.path}
                  end
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
