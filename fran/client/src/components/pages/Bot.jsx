// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'

export default function Bot() {
  function handleSubmitReply(){
    
  }

  return (
    <>
      <NavMenu />
      <h1>Bot</h1>

      <form onSubmit={handleSubmitReply}>
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

    </>
  )
}