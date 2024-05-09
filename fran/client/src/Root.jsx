import { Outlet, Link } from 'react-router-dom'


// Components
import NavMenu from './components/subcomponents/NavMenu.jsx'

export default function Root() {

  return (
    <>

      {/* //! Temporary – To DELETE START */}
      {/* < NavMenu /> */}
      <Link to={'/register'}>Register</Link>
      <br />
      <Link to={'/login'}>Log in</Link>
      <hr />
      {/* //! Temporary – To DELETE END */}
      {/* <NavMenu /> */}

      {/* Main Page Content */}
      < Outlet />

    </>
  )
}