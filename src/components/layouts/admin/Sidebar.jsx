import { BookOpenText, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const Sidebar = () => {
  const { logout } = useAuth()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <nav
      className="hs-accordion-group p-6 w-full flex flex-col flex-wrap sidebar"
      data-hs-accordion-always-open
    >
      <ul className="space-y-1.5">
        <li>
          <NavLink
            className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none"
            to="/admin/books"
          >
            <BookOpenText size={14} /> Books
          </NavLink>
        </li>
        <li>
          <NavLink
            className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none"
            to="/admin/users"
          >
            <Users size={14} /> Users
          </NavLink>
        </li>
        <li>
          <a
            className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none"
            onClick={handleLogout}
            href="#"
          >
            <Users size={14} /> Logout
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
