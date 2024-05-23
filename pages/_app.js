import '../styles/app.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';
axios.defaults.withCredentials = true;



export default function AppComponent({ Component, pageProps,currentuser}) {
 
  const [userData, setUserData] = useState(null)

  // const fetchData = async () => {
  //   const res = await axios.get('http://localhost:4000/api/users/currentuser');
  //   setUserData(res.data)
  // }


  // useEffect(() => {
  //   fetchData()
  // },[])

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <Header {...pageProps}/>
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}


AppComponent.getInitialProps = async (appContext) => {
  const res = await axios.get('http://localhost:4000/api/users/currentuser');

  let pageProps = {}
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps()
  }


  return { currentuser: res.data.currentuser, pageProps }
}