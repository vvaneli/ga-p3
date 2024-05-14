import { useState } from 'react'
import menu from '../../assets/icons/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg'

export default function Header() {
  const [navState, setNavState] = useState('')

  function openNav() {
    setNavState('navmenu navOpen')
  }

  return (
    <>
    <header>
      {/* <img className='menu-icon' src={menu} onClick={openNav} alt='navigation menu' /> */}
      </header>
    </>
  )

}