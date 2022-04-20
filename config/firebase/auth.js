import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export function createuser(email, password, set) {
    return createUserWithEmailAndPassword(auth, email, password).catch(error => {
       if(error.code == 'auth/email-already-in-use') {
            set('[Error] Email is already in use')
       }
    })
}

export function loginuser(email, password, set) {
    return signInWithEmailAndPassword(auth, email, password).catch(error => {
        console.log(error)
        if (error.code == `auth/user-not-found`) {
            set(`[Error] The account you tried to login to doesn't exist`)
        }
    })
}


export function logout() {
    signOut(auth)
}
