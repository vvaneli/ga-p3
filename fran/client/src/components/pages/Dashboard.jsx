// import { useEffect } from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { isLoggedIn } from '../../lib/auth.js'
import { getToken } from '../../lib/auth.js'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'
// import SuccessMsg from '../subcomponents/SuccessMsg.jsx'

export default function Dashboard() {
  const navigate = useNavigate()

  const { state } = useLocation()

  // set data from DB
  const [myAccount, setMyAccount] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

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

  // get account data from DB
  useEffect(() => {
    async function getAccount() {
      try {
        const { data } = await axios.get(`/api/account`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        console.log(data)
        setMyAccount(data)
      } catch (error) {
        console.log(error.message)
        setErrorMsg(error.message)
      }
    }
    getAccount()
  }, [])

  return (
    <>
      {/* <div className='wrapper' id='dashboard'> */}
      <div id='dashboard'>
        <div className='phone secure-route'>
          <main id='app'>
            <NavMenu />
            {/* <h1>Dashboard</h1> */}
            {(!state)
              ? <h1>Hello {myAccount.nickname}</h1>
              : <p>{state.successMsg}</p>
            }
            {errorMsg && <p>{errorMsg}</p>}
          </main>
        </div>
      </div>
    </>
  )
}