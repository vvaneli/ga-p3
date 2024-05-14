import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../lib/auth'

// Components
// import registerFormFields from '../subcomponents/FormAccountsFields.jsx'
import logo from '../../assets/logo/fran_logo-solid_white_200w200h.svg'
// import profileImg from '../../assets/icons/face_24dp_FILL0_wght400_GRAD0_opsz24.svg'

export default function Register() {

  // State variables
  const [registerFormData, setRegisterFormData] = useState({
    nickname: '',
    email: '',
    // profileImg: '',
    password: '',
    passwordConfirm: '',
    legal: Boolean(),
  })
  // const [successMsg, setSuccessMsg] = useState('')
  const [formError, setFormError] = useState('')

  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault()
    try {
      const { data: { message, token } } = await axios.post('/api/account/register', registerFormData)
      console.log(message, token)
      if (!token) throw new Error(setFormError('Couldn\'t create an account.'))
      setToken(token)
      // setSuccessMsg(message)
      navigate('/dashboard', { state: { successMsg: message } })
    } catch (error) {
      console.log(error)
      // console.log(error.response.data.message)
      setFormError(error.response.data.message)
    }
  }

  function handleChange(e) {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value })
    setFormError('')
    console.log(registerFormData, formError)
  }

  return (
    <><div className='wrapper'>
      <aside className='quotes'>
        <q>When I doubt myself, I have to remind myself that I built 2 fully functioning full stack apps from scratch in 10wks!</q>
        <q>It took a long time to believe that I was hired not because of quotas, but because of my genuine skill as an engineer.</q>
        <q>Today is the first time I feel like a real engineer, and it’s such a stressful and glorious feeling.</q>
      </aside>
      <div className='cover-logo'>
        <img src={logo} alt='Upright Fran logo' />
      </div>
      <main className='authForm'>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <label htmlFor='text'>Nickname</label>
          <input type='text' placeholder='enter a nickname' name='nickname' id='nickname' value={registerFormData.nickname} onChange={handleChange} required />
          <label htmlFor='email'>E-mail</label>
          <input type='email' placeholder='add your email' name='email' id='email' value={registerFormData.email} onChange={handleChange} required />

          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='enter a password' name='password' id='password' value={registerFormData.password} onChange={handleChange} required />
          <label htmlFor='passwordConfirm'>Confirm Password</label>
          <input type='password' placeholder='confirm password' name='passwordConfirm' id='passwordConfirm' value={registerFormData.passwordConfirm} onChange={handleChange} required />
          {/* <input className='' type='image' src={profileImg} name='profileImg' value={registerFormData.profileImg} alt='' /> */}
          <label><input type='checkbox' name='legal' value={registerFormData.legal} onChange={handleChange} required />I agree</label>
          {formError && <p><em>{formError}</em></p>}
          <button type='submit'>Register</button>
        </form>
        <Link to={'/login'}>Log in</Link>
        {/* <p><a href='#'>Log in</a></p> */}
      </main>
      </div>
    </>
  )
}