// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Login() {

  return (
    <>
    <h1>Log in</h1>
      <form>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='hello@fran.me' name='email' required />

          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Enter Password' name='password' required />

            <button type='submit'>Log in</button>
            {/* <label><input type='checkbox' checked='checked' name='remember' /> Remember me</label> */}
          </form>
          <p><a href='#'>Forgot/Reset Password</a></p>
          <Link to={'/register'}>Register</Link>
          {/* <p><a href='#'>Register</a></p> */}
        </>
        )
}