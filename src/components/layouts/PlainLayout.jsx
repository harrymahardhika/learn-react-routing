import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const PlainLayout = () => {
  useEffect(() => {
    document.documentElement.classList.add('h-full')
    document.body.classList.add('dark:bg-slate-900', 'bg-gray-100', 'h-full', 'py-16')

    return () => {
      document.documentElement.classList.remove('h-full')
      document.body.classList.remove('dark:bg-slate-900', 'bg-gray-100', 'h-full', 'py-16')
    }
  })

  return (
    <>
      <Outlet />
    </>
  )
}

export default PlainLayout
