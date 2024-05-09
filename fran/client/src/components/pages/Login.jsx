import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../../../lib/auth'

export default function Login() {
  

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })

  // const [loginFormData, setLoginFormData] = useState({ email: 0, password: 0 })
  // const [loginFormData, setLoginFormData] = useState({})
// 
  // const [loginFormData, setLoginFormData] = useState('')
  const [error, setError] = useState('')

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
      // await axios.post('/api/accounts/login', loginFormData)
      // const { data: { token } } = await axios.post('/api/accounts/login', loginFormData)
      // console.log(data)
      // If successful:
      // setToken(token) // save token to localStorage
      // navigate('/dashboard')
    } catch (error) {
      console.log(error)
      // console.log(error.response.data.message)
      // setError(error.response.data.message)
    }
  }

  function handleChange(e){
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })
    setError('') // resets the error when typing into a form field
  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='hello@fran.me' name='email' id='email' value={loginFormData.email} onChange={handleChange} required />
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter Password' name='password' id='password' value={loginFormData.password} onChange={handleChange} required />
        <button type='submit'>Log in</button>
      </form>
      <p>Current input: {loginFormData}</p>
      <p><a href='#'>Forgot/Reset Password</a></p>
      <Link to={'/register'}>Register</Link>
      {/* <p><a href='#'>Register</a></p> */}
    </>
  )
}