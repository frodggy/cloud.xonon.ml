import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navb from '../components/navbar'
import { auth } from '../config/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function MyApp({ Component, pageProps }: AppProps) {
   return <>
      <Navb />
      <Component {...pageProps} />   
   </>
}

export default MyApp
