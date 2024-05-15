import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../lib/auth'

// Assets
import logo from '../../assets/logo/fran_logo-solid_white_200w200h.svg'
import logoWord from '../../assets/logo/fran_wlogo_rgbW_350w120h.svg'

export default function Login() {

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })
  // const [successMsg, setSuccessMsg] = useState('')
  const [formError, setFormError] = useState('')

  const navigate = useNavigate()

  async function handleLoginSubmit(e) {
    e.preventDefault()
    try {
      // await axios.post('/api/account/login', loginFormData)
      const { data: { message, token } } = await axios.post('/api/account/login', loginFormData)
      // If successful:
      // setSuccessMsg(message)
      setToken(token) // save token to localStorage
      // saveMsgLogin(message)
      navigate('/dashboard', { state: { successMsg: message } })
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
      <div className='wrapper' id='login'>
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
              <h1>Log in</h1>
              <form onSubmit={handleLoginSubmit}>
                <label htmlFor='email'>E-mail</label>
                <input type='email' placeholder='email' name='email' id='email' value={loginFormData.email} onChange={handleChange} required />
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='password' name='password' id='password' value={loginFormData.password} onChange={handleChange} required />
                {formError && <p className='auth-form-error'>{formError}</p>}
                <button type='submit'>Log in</button>

              </form>
              <p className='link-to'><a href='#'>Reset Password</a></p>
              <Link to={'/register'} className='link-to'>Sign Up</Link>
            </section>
          </main>
        </div>
      </div >
    </>
  )
}