import { Link } from 'react-router-dom'

// Sub-Components
import LogoutBtn from './LogoutBtn.jsx'

export default function NavMenu() {

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
        <LogoutBtn />
      </section>
    </>
  )
}