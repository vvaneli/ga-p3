// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Register() {

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
        <button type='submit'>Register</button>
      </form>
      <Link to={'/login'}>Log in</Link>
      {/* <p><a href='#'>Log in</a></p> */}
    </>
  )
}