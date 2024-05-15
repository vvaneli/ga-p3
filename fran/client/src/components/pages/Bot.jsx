import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'
import { chatAttributionError } from '../../../../database/data/chatAttributionError.js'

export default function Bot() {

  const fullConvo = chatAttributionError
  // console.log(fullConvo)

  // index counter to keep track of conversation progress
  const [convoIndex, setConvoIndex] = useState(0)
  // increment index to progress conversation
  const nextConvoIndex = () =>
    setConvoIndex((prevConvoIndex) => prevConvoIndex + 1)
  // const startConvo = convoIndex === 0
  const endFullConvo = convoIndex === fullConvo.length - 1

  const [btn1, setBtn1] = useState('')
  // const [btn2, setBtn2] = useState('')


  // function handleChange(e){
  //   setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value })
  //   setFormError('')
  //   console.log(registerFormData, formError)
  // }
  // useEffect(() => {
  //   function handleBtnChoice(e) {
  //     setBtn1({ [e.target.name]: e.target.value })
  //     console.log(btn1)
  //   }
  //   handleBtnChoice()
  // }, [])

  function handleBtnChoice() {

  }

  function handleReply() {

  }

  function handleSaveJournal() {

  }

  return (
    <>
      <NavMenu />
      <h1>Bot</h1>
      <div>
      <form onSubmit={handleSaveJournal}>
          <label htmlFor='text'>Nickname</label>
          <input type='text' placeholder='enter a nickname' name='nickname' id='nickname' value={registerFormData.nickname} onChange={handleChange} required />
          <label htmlFor='email'>E-mail</label>
          <input type='email' placeholder='add your email' name='email' id='email' value={registerFormData.email} onChange={handleChange} required />

          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='enter a password' name='password' id='password' value={registerFormData.password} onChange={handleChange} required />
          <label htmlFor='passwordConfirm'>Confirm Password</label>
          <input type='password' placeholder='confirm password' name='passwordConfirm' id='passwordConfirm' value={registerFormData.passwordConfirm} onChange={handleChange} required />
          {/* <input className='' type='image' src={profileImg} name='profileImg' value={registerFormData.profileImg} alt='' /> */}

          {formError && <p><em>{formError}</em></p>}
          <button type='submit'>Register</button>
        </form>
      </div>
    </>
  )
}