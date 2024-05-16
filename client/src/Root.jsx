import axios from 'axios'
import { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'

// Components
import NavMenu from './components/subcomponents/NavMenu.jsx'

export default function Root() {

  return (
    <>
      {/* Main Page Content */}
      < Outlet />
    </>
  )
}