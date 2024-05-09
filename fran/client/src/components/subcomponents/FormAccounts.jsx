import { useState } from 'react'

// Components
// import registerFormFields from './FormAccountsFields.jsx'

export default function FormAccounts(){

  // State variables
  const [formData, setFormData] = useState()
  const [error, setError] = useState('')

  // Event listener
  async function handleSubmit(e){
    e.preventDefault()
    try {
      await request(formData) // Send request passed as a prop
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
      setError(error.response.data)
    }
  }
}

function handleChange(e){
  setFormData({ ...formData, [e.target.name]: e.target.value })
  setError('') // reset the error when typing into a form field
}