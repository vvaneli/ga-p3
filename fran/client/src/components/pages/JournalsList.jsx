import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'
import { getToken, isLoggedIn } from '../../../../lib/auth'

export default function JournalsList() {

  const [myJournals, setMyJournals] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  // const { vipId } = useParams();

  isLoggedIn()

  useEffect(() => {
    async function getJournals() {
      try {
        const { data } = await axios.get('/api/journals/', {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        // console.log(data)
        setMyJournals(data)
      } catch (error) {
        console.log(error.message)
        setErrorMsg(error.message)
      }
    }
    getJournals()
  }, [])

  return (
    <>
      <NavMenu />
      <h1>Journals List</h1>
      {myJournals.length > 0 ?
        myJournals.map(myJournal => {
          return (
            <article key={myJournal._id}>
              <h2>{myJournal.title}</h2>
              <p>{myJournal.situation}</p>
              <p>{myJournal.createdAt}</p>
              {myJournal.images.length > 0 ?
                <img src={`"${myJournal.image[0]}"`} alt="" />
                :
                <div>No image</div>
              }
            </article>
          )
        })
        :
        errorMsg ?
          <p><em>{errorMsg}</em></p>
          :
          <p><em>Downloading&#8230;</em></p>

      }
    </>
  )
}