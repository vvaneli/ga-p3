import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { setToken } from '../lib/auth'
// import 'dotenv/config'

export default function Login() {

  // const [loginFormData, setLoginFormData] = useState({
  //   email: '',
  //   password: ''
  // })

  // const { CONNECTION_STRING } = process.env

  // const navigate = useNavigate()

  // async function handleSubmit(e){
  //   e.preventDefault()
  //   try {
  // const data = await axios.post(CONNECTION_STRING, loginFormData)
  // const { data: { token } } = await axios.post(CONNECTION_STRING, loginFormData)
  // console.log(data)
  // If successful
  // setToken(token) // Set token to localStorage
  // navigate('/home') // Navigate to events page
  // } catch (error) {
  // console.log(error)
  // console.log(error.response.data.message)
  // setError(error.response.data.message)
  //   }
  // }

  return (
    <>
      <h1>Log in</h1>
      <form>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='hello@fran.me' name='email' required />

        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter Password' name='password' required />

        <button type='submit'>Log in</button>
        {/* <button type='submit' onChange={handleSubmit}>Log in</button> */}
        {/* <label><input type='checkbox' checked='checked' name='remember' /> Remember me</label> */}
      </form>
      <p><a href='#'>Forgot/Reset Password</a></p>
      <Link to={'/register'}>Register</Link>
      {/* <p><a href='#'>Register</a></p> */}
    </>
  )
}