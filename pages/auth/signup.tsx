import type { NextPage } from 'next'
import React, { useEffect, useState } from "react"
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { createuser } from '../../config/firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../../config/firebase/firebase'

const validateEmail = (email: any, set: Function) => {
  let re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let d = re.test(email.toString().toLocaleLowerCase())
  if (d) {
    set('')
    return d
  } else {
    console.log(d, ' ', email)
    set('[Error] Email is not valid')
    return false
  }
};

const validatePassword = (password: any, set: Function) => {
  let re = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
  let b = re.test(password.toString().toLocaleLowerCase())
  if (!b) {
    console.log(b, ' ', password)
   set(`[Error] Password isn't strong
    password must be containing at least 8 characters, 1 number, 1 upper and 1 lowercase`)
  } else {
    set('')
    return b
  }
}

const matchPasswords = (cpassword: any, password: any, set: Function) => {
  let d;
  if (cpassword.toString().toLocaleLowerCase() == password.toString().toLocaleLowerCase()) {
    set('')
    d = true
  } else {
    console.log(cpassword, ' ', password)
    set('[Error] Passwords do not match')
    d = false
  }
  return d
}

const SignUp: NextPage = () => {
  let r = useRouter()
  useEffect(() => {
    if(auth.currentUser) {
        r?.push('/dashboard/profile')
    }
  }, [])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  let router = useRouter()

  function handleSubmit(e: any) {
    e.preventDefault()
    matchPasswords(cpassword, password, setError) 
    if(!validateEmail(email, setError)) return
    let p = validatePassword(password, setError)
    if(!p) return
    createuser(email, password, setError)
    router.push('/')
  }


  return (
    <>
       <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e) => setcPassword(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          <br />
          <small><p>password must be containing at least 8 characters, 1 number, 1 upper and 1 lowercase</p></small>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link href="/auth/login">Log In</Link>
      </div>
    </>
  )
}

export default SignUp
