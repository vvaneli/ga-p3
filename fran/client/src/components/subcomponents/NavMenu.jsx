import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeToken } from '../../lib/auth'

import logo from '../../assets/logo/fran_wlogo_rgbW_350w300h.svg'
import close from '../../assets/icons/close_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import menu from '../../assets/icons/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg'

export default function NavMenu() {

  const [navState, setNavState] = useState('navmenu navClose')
  const navigate = useNavigate()

  function openNav() {
    setNavState('navmenu navOpen')
  }

  function closeNav() {
    // function Item({ name, isPacked }) {
    // return <nav className='navmenu-close'></nav>
    // }
    setNavState('navmenu navClose')
  }

  function handleLogout() {
    removeToken()
    navigate('/login')
  }

  return (
    <>
      <div className='wrapper' id=''>
      
        {/* <nav className='navmenu navOpen'> */}
        <img className='menu-icon' src={menu} onClick={openNav} alt='navigation menu' />
        <nav className={navState}>
          <section className='navmenu-section navmenu-options'>
            <img src={close} className='closeBtn' onClick={closeNav} alt='close' />
            <Link to={'/bot'}><p className='navmenu-item'>Bot</p></Link>

            <Link to={'/journals'}><p className='navmenu-item'>Journals</p></Link>
            {/* <Link to={'/articles'}>Articles</Link> */}
            <hr />
            <Link to={'/account'}><p className='navmenu-item'>Account</p></Link>
            {/* <Link to={'/help'}>Help</Link> */}
            <hr />
            <button className='navmenu-item logoutBtn' type='button' onClick={handleLogout}>Log out</button>
          </section>
          <section className='navmenu-section'>
          <Link to={'/dashboard'}>
            <img className='navmenu-logo' src={logo} alt='logo' />
            </Link>
          </section>
        </nav>
      </div>

    </>
  )
}