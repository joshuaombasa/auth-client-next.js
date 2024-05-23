import axios from 'axios'
import Router from 'next/router'
import React, { useState } from 'react'

export default function Signin() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setErrors(null)
      const res = await axios.post('http://localhost:4000/api/users/signin', {
        email: formData.email,
        password: formData.password
      })
     
      setFormData({email: '', password: ''})
      Router.push('/')
    } catch (error) {
      setErrors(error.response.data.errors)
    }
  

  }

  return (
    <div className='common-width'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div>
          <label htmlFor='email'>Password</label>
          <input name='email' id='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' id='password' value={formData.password} onChange={handleChange} />
        </div>
        {errors && errors.map(error => <span key={error.message} className="error-message">{error.message}</span>)}
        <button className='btn-style'>Sign in</button>

      </form>
    </div>
  )
}
