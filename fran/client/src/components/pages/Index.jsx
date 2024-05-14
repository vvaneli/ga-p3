// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

// Sub-Components
// import NavMenu from '../subcomponents/NavMenu.jsx'

export default function Index() {
  // const { state } = useLocation()
  return (
    <>
      <h1>Index</h1>
      {/* {errorMsg && <p>{errorMsg}</p>} */}
      <Link to={'/register'}>Register</Link>
      <Link to={'/login'}>Log in</Link>
    </>
  )
}