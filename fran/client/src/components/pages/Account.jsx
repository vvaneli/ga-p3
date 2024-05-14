import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// Sub-Components
import Header from '../subcomponents/Header.jsx'
import NavMenu from '../subcomponents/NavMenu.jsx'
import { getToken, removeToken } from '../../lib/auth.js'

export default function Account() {

  const [myAccount, setMyAccount] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  // let { accountId } = useParams();

  const navigate = useNavigate()

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

  // function handleChange() {

  // }

  async function deleteAccount() {
    try {
      await axios.delete(`/api/account`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      removeToken()
      navigate('/')
    } catch (error) {
      console.log(error.message)
      setErrorMsg(error.message)
    }
  }

  return (
    <>
      <Header />
      <NavMenu />
      <h1>Account</h1>
      {myAccount ?
        <>
          <p>Name: {myAccount.nickname}</p>
          <p>Email: {myAccount.email}</p>
          <p>Profile image: {myAccount.profileImg}</p>
          <p>Tags: {myAccount.tags}</p>
          <p>Id: {myAccount._id}</p>
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