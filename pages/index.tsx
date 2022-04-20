import type { NextPage } from 'next'
import React from "react"
import { auth } from '../config/firebase/firebase'
import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
const Home: NextPage = () => {
  const user = auth.currentUser;
  let r = useRouter()
  // if(user === null) {
  //  r.push('/auth/login')
  // }
  
  return (
    <></>
  )
}

export default Home
