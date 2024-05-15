import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// Sub-Components
import Header from '../subcomponents/Header.jsx'
import NavMenu from '../subcomponents/NavMenu.jsx'
import { getToken, removeToken } from '../../lib/auth.js'

// Assets
import profileImg from '../../assets/icons/face_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import tick from '../../assets/icons/check_24dp_FILL0_wght400_GRAD0_opsz24_000.svg'

export default function Account() {

  // set data from DB
  const [myAccount, setMyAccount] = useState([])
  // set new data to update DB
  // const [profileFormData, setProfileFormData] = useState([])
  // show/hide profile edit fileds
  const [editProfileBtn, setEditProfileBtn] = useState('')
  const [showProfileInfo, setShowProfileInfo] = useState('')
  const [editProfileInfo, setEditProfileInfo] = useState('hide')
  const [saveProfileBtn, setSaveProfileBtn] = useState('hide')
  // show/hide password edit fields
  const [editPasswordBtn, setEditPasswordBtn] = useState('')
  const [showPasswordInfo, setShowPasswordInfo] = useState('')
  const [editPasswordInfo, setEditPasswordInfo] = useState('hide')
  const [savePasswordBtn, setSavePasswordBtn] = useState('hide')
  // show/hide success tick
  const [successTick, setSuccessTick] = useState('hide')
  // set error messages
  // const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [formError, setFormError] = useState('')

  // let { accountId } = useParams();

  const navigate = useNavigate()

  // get account data from DB
  useEffect(() => {
    async function getAccount() {
      try {
        const { data } = await axios.get(`/api/account`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        console.log(data)
        setMyAccount(data)
      } catch (error) {
        console.log(error.message)
        setErrorMsg(error.message)
      }
    }
    getAccount()
  }, [])

  // save account updates to DB

  async function handleSubmitUpdateProfile(e) {
    e.preventDefault()
    try {
      await axios.put('/api/account', myAccount, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      handleExitEditProfile()
    } catch (error) {
      console.log(error)
      // console.log(error.response.data.message)
      setFormError(error.response.data.message)
    }
  }

  async function handleSubmitUpdatePassword(e) {
    e.preventDefault()
    try {
      await axios.put('/api/account', myAccount, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      handleExitEditPassword()
    } catch (error) {
      console.log(error)
      // console.log(error.response.data.message)
      setFormError(error.response.data.message)
    }
  }
  // Delete account

  async function deleteAccount(e) {
    e.preventDefault()
    try {
      await axios.delete(`/api/account`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      removeToken()
      navigate('/')
    } catch (error) {
      console.log(error.message)
      setErrorMsg(error.message)
    }
  }

  function handleChange(e) {
    e.preventDefault()
    setMyAccount({ ...myAccount, [e.target.name]: e.target.value })
    setFormError('')
  }

  function handleEditProfile() {
    setEditProfileBtn('hide')
    setShowProfileInfo('hide')
    setEditProfileInfo('')
    setSaveProfileBtn('')
  }

  function handleExitEditProfile() {
    setEditProfileBtn('')
    setShowProfileInfo('')
    setEditProfileInfo('hide')
    setSaveProfileBtn('hide')
  }

  function handleEditPassword() {
    setEditPasswordBtn('hide')
    setShowPasswordInfo('hide')
    setEditPasswordInfo('')
    setSavePasswordBtn('')
  }

  function handleExitEditPassword() {
    setEditPasswordBtn('')
    setShowPasswordInfo('')
    setEditPasswordInfo('hide')
    setSavePasswordBtn('hide')
    setSuccessTick('')
  }

  return (
    <>
      <Header />
      <NavMenu />
      <h1>Account</h1>
      {myAccount ?
        <>
          {/* <p>{successMsg}</p> */}

          {/* PROFILE */}
          <section className='account-profile'>
            <div className={showProfileInfo}>
              {myAccount.profileImg
                ? <img className='profileImg' src={myAccount.profileImg} alt='profile image' />
                : <img className='profileImg' src={profileImg} alt='profile image' />
              }
              <p>Nickname: {myAccount.nickname}</p>
              <p>E-mail: {myAccount.email}</p>
              <button type='button' className={editProfileBtn} onClick={handleEditProfile}>Edit Profile</button>
            </div>
            <div className={editProfileInfo}>
              <form onSubmit={handleSubmitUpdateProfile}>
                <label htmlFor='text'>Nickname</label>
                <input type='text' placeholder={myAccount.nickname} name='nickname' id='nickname' value={myAccount.nickname} onChange={handleChange} />
                <label htmlFor='email'>E-mail</label>
                <input type='email' placeholder={myAccount.email} name='email' id='email' value={myAccount.email} onChange={handleChange} />
                {formError && <p><em>{formError}</em></p>}
                <button type='submit' className={saveProfileBtn}>Save Profile</button>
              </form>
              <button type='button' onClick={handleExitEditProfile}>Cancel</button>
            </div>
          </section>

          {/* PASSWORD */}
          <section className='account-password'>
            <div className={showPasswordInfo}>
              <p>Password: ✱✱✱✱✱<img className={successTick} src={tick} alt='updated' /></p>
              <button type='button' className={editPasswordBtn} onClick={handleEditPassword}>Edit Password</button>
            </div>
            <div className={editPasswordInfo}>
              <form onSubmit={handleSubmitUpdatePassword}>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter new password' name='password' id='password' value={myAccount.password} onChange={handleChange} required />
                <label htmlFor='passwordConfirm'>Confirm Password</label>
                <input type='password' placeholder='Confirm new password' name='passwordConfirm' id='passwordConfirm' value={myAccount.passwordConfirm} onChange={handleChange} required />
                {formError && <p><em>{formError}</em></p>}
                <button type='submit' className={savePasswordBtn}>Save Password</button>
              </form>
              <button type='button' onClick={handleExitEditPassword}>Cancel</button>
            </div>
          </section>

          {/* TAGS ––––––– TO DO ––––––––– */}
          {/* <section className='account-tags'> */}
          {/* {(!myAccount.tags) || (myAccount.tags.length <= 0) */}
          {/* ? <button>Create tags for your journal entries</button> */}
          {/* : <p>Tags: {myAccount.tags}</p> //! map  */}
          {/* } */}
          {/* </section> */}

          {/* DELETE ACCOUNT */}
          {/* <p>Id: {myAccount._id}</p> */}

          <section className='account-delete'>
            <button type='button' onClick={deleteAccount}>Delete Account</button>
          </section>
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