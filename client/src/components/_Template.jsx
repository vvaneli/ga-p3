// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'

export default function Fran() {

  return (
    <>
      <div className='wrapper' id=''>
        <div className='phone secure-route'>
          <main id='app'>
            <NavMenu />
            <h1>H1</h1>
            {(state.successMsg) && <p>{state.successMsg}</p>}
          </main>
        </div>
      </div>

    </>
  )
}