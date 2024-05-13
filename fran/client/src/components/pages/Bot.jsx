import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'
import { chatAttributionError } from '../../../../database/data/chatAttributionError.js'

export default function Bot() {

  // * ––––– Manage Conversation Thread –––––

  //! 1. THE CONVERSATION
  // define the dialogue
  const fullConvo = chatAttributionError
  console.log(fullConvo)
  // save the conversation thread to display on screen
  const [history, setHistory] = useState([])
  // index counter to keep track of conversation progress
  const [convoIndex, setConvoIndex] = useState(0)
  // increment index to progress conversation
  // const nextConvoIndex = () =>
  //   setConvoIndex((prevConvoIndex) => prevConvoIndex + 1)
  // const startConvo = convoIndex === 0
  const endFullConvo = convoIndex === fullConvo.length - 1

  //! 2. BOT SAYS
  // const [btn1, setBtn1] = useState('')
  // const [btn2, setBtn2] = useState('')

  //! 3. HUMAN SAYS
  // show typing in text input  
  const [humanReply, setHumanReply] = useState('')
  // append human reply to chat history  
  function handleChange(e) {
    setHumanReply(e.target.value)
    // setHistory({ ...history, [e.target.className]: e.target.value })
    console.log('human history: ', history)
  }

  // function handleBotReply(fullConvo, convoIndex, history) {
  function handleBotReply() {
    fullConvo[convoIndex].map((convoTurn) => {
      // setKeyIndex(keyIndex+1)
      // append bot reply to chat history
      console.log('convoTurn: ', convoTurn)
      setHistory({ ...history, 'botReply': convoTurn })
      // increment index to progress conversation
      setConvoIndex((convoIndex) => convoIndex + 1)
      console.log('bot history: ', history)
      // return (
      // <p key={index}>{convoTurn}</p>
      // <p key={convoIndex.concat(i)}>{convoTurn}</p>
      // )
    })
  }

  useEffect(() => {
    handleBotReply()
  }, [])

  function handleHumanReply() {
    setHistory({ ...history, humanReply })
    handleBotReply()
  }

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

  // function handleBtnChoice() {

  // }


  function handleSubmitReply() {

  }

  // myJournals.map(myJournal => {
  //   return (
  //     <article key={myJournal._id}>
  //       <h2>{myJournal.title}</h2>
  //       <p>{myJournal.situation}</p>
  //       <p>{myJournal.createdAt}</p>
  //       {myJournal.images.length > 0 ?
  //         <img src={`"${myJournal.image[0]}"`} alt="" />
  //         :
  //         <div>No image</div>
  //       }
  //     </article>
  //   )
  // })
  // const [keyIndex, setKeyIndex] = useState(0)
  return (
    <>
      <NavMenu />
      <h1>Bot</h1>

      <div>
        <form onSubmit={handleSubmitReply}>
          <p>{fullConvo[convoIndex]}</p>

          {/* <input type='button' name='Yes' id='' value='Yes' onChange={handleBtnChoice} />
          <input type='button' name='No' id='' value='No' onChange={handleBtnChoice} /> */}
          {/* Chat input */}
          <label htmlFor='text'></label>
          <textarea className='humanReply' name='reply' id='reply' value={humanReply} onChange={handleChange} autoFocus required placeholder='Type your reply to Fran'></textarea>
          <button type='submit' disabled={endFullConvo} onClick={handleHumanReply}>Reply</button>
        </form>
      </div>

    </>
  )
}