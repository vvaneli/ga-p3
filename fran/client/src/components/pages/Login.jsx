import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../../../lib/auth'

export default function Login() {

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })
  const [serverMsg, setServerMsg] = useState('')
  const [formError, setFormError] = useState('')

  const navigate = useNavigate()

  async function handleLoginSubmit(e) {
    e.preventDefault()
    try {
      // await axios.post('/api/accounts/login', loginFormData)
      const { data: {message, token} } = await axios.post('/api/accounts/login', loginFormData)
      // If successful:
      setServerMsg(message)
      setToken(token) // save token to localStorage
      // saveMsgLogin(message)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      // console.log(error.response.data.message)
      setFormError(error.response.data.message)
    }
  }

  function handleChange(e) {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })
    setFormError('') // resets the error when typing into a form field
    console.log(loginFormData, formError)
  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='hello@fran.me' name='email' id='email' value={loginFormData.email} onChange={handleChange} required />
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter Password' name='password' id='password' value={loginFormData.password} onChange={handleChange} required />
        {formError && <p><em>{formError}</em></p>}
        <button type='submit'>Log in</button>
      </form>
      <p><a href='#'>Forgot/Reset Password</a></p>
      <Link to={'/register'}>Register</Link>
      {/* <p><a href='#'>Register</a></p> */}
    </>
  )
}