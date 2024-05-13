import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getToken, isLoggedIn } from '../../../../lib/auth'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'

export default function Account() {

  const [myAccount, setMyAccount] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  let { accountId } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    async function getAccount() {
      try {
        const { data } = await axios.get(`/api/accounts/${accountId}`, {
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
  }, [accountId])

  // function handleChange() {

  // }

  async function deleteAccount() {
    try {
      await axios.delete(`/api/accounts/${accountId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      navigate('/')
      // console.log(data)
      // setMyAccount(data)
    } catch (error) {
      console.log(error.message)
      setErrorMsg(error.message)
    }
  }

  return (
    <>
      <NavMenu />
      <h1>Account</h1>
      {myAccount ?
        <>
          <p>{myAccount.nickname}</p>
          <p>{myAccount.email}</p>
          <p>Profile image: {myAccount.profileImg}</p>
          <p>Tags: {myAccount.tags}</p>
          <button type='button' onClick={deleteAccount}>Delete Account</button>
        </>
        :
        errorMsg ?
          <p><small>{errorMsg}</small></p>
          :
          <p>Loading data...</p>
      }

    </>
  )
}