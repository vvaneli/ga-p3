import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../../../lib/auth'

export default function Login() {

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  // useEffect(() => {
  //   async function login() {
  //     try {
  //       const loginFormData = await axios.post('/api/accounts/login')

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   login()
  // }, [])

  async function handleLoginSubmit(e) {
    e.preventDefault()
    try {
      // const data = await axios.post(CONNECTION_STRING, loginFormData)
      const { data: { token } } = await axios.post('/api/accounts/login', loginFormData)
      // console.log(data)
      // If successful
      setToken(token) // Set token to localStorage
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      // console.log(error.response.data.message)
      // setError(error.response.data.message)
    }
  }

  return (
    <>
      <h1>Log in</h1>
      <form>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='hello@fran.me' name='email' required />

        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter Password' name='password' required />

        <button type='submit'>Log in</button>
        <button type='submit' onChange={handleLoginSubmit}>Log in</button>
        {/* <label><input type='checkbox' checked='checked' name='remember' /> Remember me</label> */}
      </form>
      <p><a href='#'>Forgot/Reset Password</a></p>
      <Link to={'/register'}>Register</Link>
      {/* <p><a href='#'>Register</a></p> */}
    </>
  )
}