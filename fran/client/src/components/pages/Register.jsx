import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../../../lib/auth'

export default function Register() {

  const [registerFormData, setRegisterFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const navigate = useNavigate()

  // useEffect(() => {
  //   async function register() {
  //     try {
  //       const { data } = await axios.post('/api/accounts/register')
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   register()
  // }, [])

  async function handleRegisterSubmit(e) {
    e.preventDefault()
    try {
      // const data = await axios.post(CONNECTION_STRING, loginFormData)
      const { data: { token } } = await axios.post('/api/accounts/register', registerFormData)
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
      <h1>Register</h1>
      <form>
        <label htmlFor='text'>Nick name</label>
        <input type='text' placeholder='Princess Warrior' name='username' required />
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='hello@fran.me' name='email' required />

        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter Password' name='password' required />
        <label htmlFor='passwordConfirmation'>Confirm Password</label>
        <input type='passwordConfirmation' placeholder='Confirm Password' name='passwordConfirmation' required />

        <label><input type='checkbox' name='legal' required />I agree</label>
        <button type='submit' onChange={handleRegisterSubmit}>Register</button>
      </form>
      <Link to={'/login'}>Log in</Link>
      {/* <p><a href='#'>Log in</a></p> */}
    </>
  )
}