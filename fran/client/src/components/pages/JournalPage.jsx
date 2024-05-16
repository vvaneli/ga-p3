import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'
import { getToken, isLoggedIn } from '../../lib/auth.js'

export default function JournalPage() {

  const [myJournal, setMyJournal] = useState()// obj?
  const [errorMsg, setErrorMsg] = useState('')

  let { journalId } = useParams();

  useEffect(() => {
    async function getJournalEntry() {
      try {
        // const { data } = await axios.get(`/api/journals/${journalId}`)
        const { data } = await axios.get(`/api/journals/${journalId}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        console.log(data)
        setMyJournal(data)
      } catch (error) {
        console.log(error.message)
        setErrorMsg(error.message)
      }
    }
    getJournalEntry()
  }, [journalId])

  return (
    <>
      <div className='wrapper' id='journal-page'>
        <div className='phone secure-route'>
          <main id='app'>

            <NavMenu />
            <Link to={'/journals'}><p className=''>Journals</p></Link>
            {myJournal ?
              <article>
                <p><strong>Journal Page</strong></p>
                <h1>{myJournal.title}</h1>
                <p>{myJournal.reaction.createdAt}</p>
                <img src={myJournal.images[0]} alt='{myJournal.title}' />
                <p>{myJournal.situation}</p>
                <img src={myJournal.sticker} alt='sticker' />
                <p>Tags: {myJournal.tags[0]}</p>
                <section>
                  <h2>My Reaction</h2>
                  <p>Mood: {myJournal.reaction.feeling1[0]}</p>
                  <p>Intensity: {myJournal.reaction.feeling1Rate}</p>
                  <p>{myJournal.reaction.internal}</p>
                  <p>{myJournal.reaction.permanent}</p>
                  <p>{myJournal.reaction.global}</p>
                </section>
                <section>
                  <h2>Reflection</h2>
                  <p>Mood: {myJournal.reflection.feeling2[0]}</p>
                  <p>Intensity: {myJournal.reflection.feeling2Rate}</p>
                  <p>{myJournal.reflection.external}</p>
                  <p>{myJournal.reflection.temporary}</p>
                  <p>{myJournal.reflection.specific}</p>
                </section>
              </article>
              :
              errorMsg ?
                <p>{errorMsg}</p>
                :
                <p>Loading data...</p>
            }
          </main>
        </div>
      </div>
    </>
  )
}