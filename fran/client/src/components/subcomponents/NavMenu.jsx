import { Link, useNavigate } from 'react-router-dom'
import { removeToken, isLoggedIn } from './../../../../lib/auth'

// Sub-Components
// import LogoutBtn from './LogoutBtn.jsx'

export default function NavMenu() {

  const navigate = useNavigate()
  
  // if (!isLoggedIn) {
  //   navigate('/')
  // }

  function handleLogout() {
    removeToken()
    navigate('/')
  }

  return (
    <>
      <section>
        <Link to={'/bot'}>Bot</Link>
      </section>
      <section>
        <Link to={'/journals'}>Journals</Link>
        <Link to={'/articles'}>Articles</Link>
      </section>
      <section>
        <Link to={'/account'}>Account</Link>
        <Link to={'/help'}>Help</Link>
        <button type='button' onClick={handleLogout}>Log out</button>
      </section>
    </>
  )
}