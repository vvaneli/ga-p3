import { useEffect } from 'react'
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'

export default function Dashboard() {

  // useEffect(() => {
  //   async function getJournals() {
  //     try {
  //       const { data } = await axios.get('/api/journals')
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getJournals()
  // }, [])

  return (
    <>
      <NavMenu />
      <h1>Dashboard</h1>

    </>
  )
}