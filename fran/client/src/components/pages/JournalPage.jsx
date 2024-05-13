import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { getToken, isLoggedIn } from '../../../../lib/auth'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'

export default function JournalPage() {

  const [myJournal, setMyJournal] = useState([])
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
      <NavMenu />
      <h1>Journal Page</h1>
      {myJournal ?
        <>
          <p>true</p>
          <h1>{myJournal.title}</h1>
        </>
        :
        errorMsg ?
          <p><small>{errorMsg}</small></p>
          :
          <p>Loading data...</p>
      }
    </>
  )
}