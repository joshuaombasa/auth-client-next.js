import  Router  from 'next/router'
import React, {useEffect} from 'react'
import axios from 'axios'

export default function signout() {

  useEffect(() => {
   const signOutFunction = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/users/signout')

      Router.push('/')
    } catch (error) {
      console.log(error.response.data)
    }
   }

   signOutFunction()
  }, [])

  return (
    <div className='common-width'>
      <h1>Signing you Out...</h1>
    </div>
  )
}
