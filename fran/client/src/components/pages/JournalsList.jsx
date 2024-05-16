import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Sub-Components
import NavMenu from '../subcomponents/NavMenu.jsx'
import { getToken, isLoggedIn } from '../../lib/auth.js'

export default function JournalsList() {

  const [myJournals, setMyJournals] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  // const { vipId } = useParams();

  // isLoggedIn()

  useEffect(() => {
    async function getJournals() {
      try {
        // const { data } = await axios.get(`/api/journals/${myJournal._id}`)
        const { data } = await axios.get('/api/journals/', {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        if (data.length === 0) { setErrorMsg('Chat to Fran to add a journal entry.') }
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
      <div className='wrapper' id='journals'>
        <div className='phone secure-route'>
          <main id='app'>

            <NavMenu />
            <h1>Journals List</h1>
            {myJournals.length > 0 ?
              myJournals.map(myJournal => {
                return (
                  <article key={myJournal._id}>
                    <h2>{myJournal.title}</h2>
                    <p>{myJournal.situation}</p>
                    <p className='journal-list-date'>{Date(myJournal.createdAt)}</p>
                    <Link to={`/journals/${myJournal._id}`} className='journal-details'>more</Link>
                    {/* {myJournal.images.length > 0 ?
                      <img src={`'${myJournal.image[0]}'`} alt='image' />
                      :
                      <div>No image</div>
                    } */}
                  </article>
                )
              })
              :
              errorMsg ?
                <p><em>{errorMsg}</em></p>
                :
                <p><em>Downloading&#8230;</em></p>

            }
          </main>
        </div>
      </div>
    </>
  )
}