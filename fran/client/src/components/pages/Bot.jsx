import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'
import { chatAttributionError } from '../../../../database/data/chatAttributionError.js'

export default function Bot() {

  const fullConvo = chatAttributionError
  console.log(fullConvo)

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

  function handleSubmitReply() {

  }

  return (
    <>
      <NavMenu />
      <h1>Bot</h1>
      <div>
        <form onSubmit={handleSubmitReply}>
          <label htmlFor='text'></label>
          <p>{fullConvo[convoIndex]}</p>
          {/* <input type='button' name='Yes' id='' value='Yes' onChange={handleBtnChoice} />
          <input type='button' name='No' id='' value='No' onChange={handleBtnChoice} /> */}
          {/* Chat input */}
          <textarea name='reply' id='reply' value='' autoFocus onChange={handleReply} required placeholder='Type your reply to Fran'></textarea>
          <button type='submit' disabled={endFullConvo} onClick={nextConvoIndex}>Reply</button>
        </form>
      </div>
    </>
  )
}