import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../../../lib/auth'

// Components
// import registerFormFields from '../subcomponents/FormAccountsFields.jsx'

export default function Register() {

  // State variables
  const [registerFormData, setRegisterFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    legal: false
  })
  const [formError, setFormError] = useState()

  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault()
    try {
      const { data: {token} } = await axios.post('/api/accounts/register', registerFormData)
      setToken(token)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      // console.log(error.response.data.message)
      setFormError(error.response.data.message)
    }
  }

  function handleChange(e){
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value })
    setFormError('')
    console.log(registerFormData, formError)
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor='text'>Nickname</label>
        <input type='text' placeholder='Fran' name='nickname' id='nickname' value={registerFormData.nickname} onChange={handleChange} required />
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='hello@fran.me' name='email' id='email' value={registerFormData.email} onChange={handleChange} required />

        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter Password' name='password' id='password' value={registerFormData.password} onChange={handleChange} required />
        <label htmlFor='passwordConfirm'>Confirm Password</label>
        <input type='passwordConfirm' placeholder='Confirm Password' name='passwordConfirm' id='passwordConfirm' value={registerFormData.passwordConfirm} onChange={handleChange} required />

        <label><input type='checkbox' name='legal' value={registerFormData.legal} onChange={handleChange} required />I agree</label>
        {formError && <p><em>{formError}</em></p>}
        <button type='submit'>Register</button>
      </form>
      <Link to={'/login'}>Log in</Link>
      {/* <p><a href='#'>Log in</a></p> */}
    </>
  )
}