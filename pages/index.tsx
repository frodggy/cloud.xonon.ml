import type { NextPage } from 'next'
import React, { useEffect } from "react"
import { auth } from '../config/firebase/firebase'
import { useRouter } from 'next/router'
import { Button, Card, Container } from 'react-bootstrap'
const Home: NextPage = () => {
  let user = auth.currentUser
    let r = useRouter()
    useEffect(() => {
        if(!user) {
            r?.push('/auth/login')
        }
    }, [])
  return (
    <Container>
      <Card>
        <Button>Sign-up Now</Button>
      </Card>
    </Container>
  )
}

export default Home
