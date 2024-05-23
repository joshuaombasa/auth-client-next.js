import React from 'react'
import Link from 'next/link'

export default function Header({currentuser}) {



  return (
    <div className='header-container'>
       <Link href="/" className='logo'>Tiketi</Link>
      <nav>
        {!currentuser ? [<Link href="/auth/signin">Sign In</Link> ,  <Link href="/auth/signup">Sign Up</Link>] :  <Link href="/auth/signout">Sign Out</Link>}
      </nav>
    </div>
  )
}
