// import { useEffect } from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { isLoggedIn } from '../../../../lib/auth'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'
// import SuccessMsg from '../subcomponents/SuccessMsg.jsx'

export default function Dashboard() {

  // const [myJournals, setMyJournals] = useState([])
  // const [errorMsg, setErrorMsg] = useState('')
  // const { vipId } = useParams();

  // isLoggedIn()

  // useEffect(() => {
  //   async function getJournals() {
  //     try {
  //       const { data } = await axios.get('/api/journals/:vipId')
  //       console.log(data)
  //       setMyJournals(data)
  //     } catch (error) {
  //       console.log(error.message)
  //       setErrorMsg(error.message)
  //     }
  //   }
  //   getJournals()
  // }, [])

  return (
    <>
      <NavMenu />
      <h1>Dashboard</h1>
      {/* <SuccessMsg /> */}

    </>
  )
}