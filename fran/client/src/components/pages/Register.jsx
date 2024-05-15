import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../lib/auth'

// Assets
import logo from '../../assets/logo/fran_logo-solid_white_200w200h.svg'
import logoWord from '../../assets/logo/fran_wlogo_rgbW_350w120h.svg'

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
    <>
      <div className='wrapper' id='register'>
        <header>
          <aside className='quotes'>
            <q>When I doubt myself, I have to remind myself that I built 2 fully functioning full stack apps from scratch in 10wks!</q>
            <q>It took a long time to believe that I was hired not because of quotas, but because of my genuine skill as an engineer.</q>
            <q>Today is the first time I feel like a real engineer, and it&apos;s such a stressful and glorious feeling.</q>
          </aside>
          <img className='cover-logo-word' src={logoWord} alt='Fran logo' />
        </header>
      <div className='phone'>
        <main id='app'>
          <section className='auth-form'>

            <img className='cover-logo' src={logo} alt='Upright Fran logo' />
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
              <label htmlFor='text'>Nickname</label>
              <input type='text' placeholder='nickname' name='nickname' id='nickname' value={registerFormData.nickname} onChange={handleChange} required />
              <label htmlFor='email'>E-mail</label>
              <input type='email' placeholder='email' name='email' id='email' value={registerFormData.email} onChange={handleChange} required />

              <label htmlFor='password'>Password</label>
              <input type='password' placeholder='password' name='password' id='password' value={registerFormData.password} onChange={handleChange} required />
              <label htmlFor='passwordConfirm'>Confirm Password</label>
              <input type='password' placeholder='confirm password' name='passwordConfirm' id='passwordConfirm' value={registerFormData.passwordConfirm} onChange={handleChange} required />
              {formError && <p className='auth-form-error'>{formError}</p>}
              <label className='input-checkbox-label'><input className='input-checkbox' type='checkbox' name='legal' value={registerFormData.legal} onChange={handleChange} required />I agree</label>
              <button type='submit'>Sign up</button>
            </form>
            <Link to={'/login'} className='link-to'>Log in</Link>
            {/* <p><a href='#'>Log in</a></p> */}
          </section>
        </main>
      </div>
    </div >
    </>
  )
}