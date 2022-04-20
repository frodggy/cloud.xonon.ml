import type { NextPage } from 'next'
import React, { useEffect, useRef, useState } from "react"
import { Button, Card, Form, Alert } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import { loginuser } from '../../config/firebase/auth'
import { auth } from '../../config/firebase/firebase'
import Link from 'next/link'
import { useRouter } from 'next/router'



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


export default function Login() {
    let r = useRouter()
    useEffect(() => {
      if(auth.currentUser) {
          r?.push('/dashboard/profile')
      }
    }, [])
    let router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    function handleSubmit(e: any) {
        e.preventDefault()
        if(!validateEmail(email, setError)) return
        loginuser(email, password, setError)
        
        if(error == `[Error] The account you tried to login to doesn't exist`) {
          return
        } else {
          router.push('/dashboard/profile')
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                    Log In
                    </Button>
                </Form>
            <div className="w-100 text-center mt-3">
                <Link href="/forgot-password">Forgot Password?</Link>
            </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link href="/auth/signup">Sign Up</Link>
        </div>
        </>
    )
}