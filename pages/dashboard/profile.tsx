import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { auth } from "../../config/firebase/firebase"
import { logout } from "../../config/firebase/auth"

const Profile: NextPage = () => {
    let user = auth.currentUser
    let r = useRouter()
    useEffect(() => {
        if(!user) {
            r?.push('/auth/login')
        }
    }, [])
    return <>
        <h1>Hello {auth.currentUser?.email}</h1>
        <h3>{user ? 'logged in' : 'not logged in'}</h3>
        <Button onClick={() => {
            logout()
            r.push('/auth/login')
        }}>Logout</Button>
    </>
}


export default Profile