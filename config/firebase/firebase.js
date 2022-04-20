import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOvPiXQOqrwCGzXmUvH7owH0roqk5UTME",
    authDomain: "nova-xonon.firebaseapp.com",
    projectId: "nova-xonon",
    storageBucket: "nova-xonon.appspot.com",
    messagingSenderId: "990610757466",
    appId: "1:990610757466:web:86cbd398f70b2b70c70563"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);