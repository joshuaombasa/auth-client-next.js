import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true;

const LandingPage = ({ currentuser }) => {


  const [userData, setUserData] = useState(null)

  const fetchData = async () => {
    const res = await axios.get('http://localhost:4000/api/users/currentuser');
    setUserData(res.data)
  }

  useEffect(() => {
    fetchData()
  },[])
  // console.log(userData)

  // Router.push('/auth/signin')
  return (
    <div className='common-width'>{userData && userData.currentuser ? <h1>You are signed in</h1>: <h1>You are not signed in</h1>}</div>
  )
}

LandingPage.getInitialProps = async () => {
  const res = await axios.get('http://localhost:4000/api/users/currentuser');

  console.log(res.data)

  return res.data
}

export default LandingPage

