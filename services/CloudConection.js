import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAvgJHP_STgKlsMAn-qF_8V1b-5vC18tDo',
  authDomain: 'barber-date.firebaseapp.com',
  projectId: 'barber-date',
  storageBucket: 'barber-date.appspot.com',
  messagingSenderId: '55091372618',
  appId: '1:55091372618:web:c931b3eaaf352f1a8bbcb3'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

// Init create User
const auth = getAuth(app)

export { db, auth }
