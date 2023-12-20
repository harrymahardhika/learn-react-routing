import { Outlet } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks'
import Navbar from './Navbar'

const AppLayout = () => {
  useDocumentTitle('My App')

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <main className="w-full py-5">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppLayout
