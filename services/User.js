import { doc, getDoc } from 'firebase/firestore'
import { db } from './CloudConection'


export const GetUser = async (email) => {
  const docRef = doc(db, 'users', email)
  const docSnap = await getDoc(docRef)

  new Promise((resolve, reject) => {
    if (docSnap.exists()) {
      resolve(docSnap.data())
    } else {
      reject('not found')
    }
  })
}

export const userTypeNavigate = (typeUser) => {
  const navigations = {
    admin: 'TabAdmin',
    client: 'StackClient',
    owner: 'StackOwner',
    barber: 'StackBarber'
  }

  return navigations[typeUser]
}


export const GetScheduleUser = async (email) => {
  const docRef = doc(db, 'users', email, 'settings', 'schedule')
  const docSnap = await getDoc(docRef)

  return new Promise((resolve, reject) => {
    if (docSnap.exists()) {
      resolve(docSnap.data())
    } else {
      reject('not found')
    }
  })
}
