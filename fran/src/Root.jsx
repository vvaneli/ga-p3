import { Outlet, Link } from 'react-router-dom'


// Components
// import NavMenu from './components/NavMenu'

export default function Root() {

  return (
    <>
      {/* //! Temporary */}
      <Link to={'/register'}>Register</Link>
      <br />
      <Link to={'/login'}>Log in</Link>
      <hr />
      {/* <NavMenu /> */}

      {/* Main Page Content */}
      < Outlet />


    </>
  )
}