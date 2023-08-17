import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from './CloudConection'
import { doc, setDoc } from 'firebase/firestore'
import { Alert} from 'react-native'

/**
 *
 * @param {*} data Informacion del formulario
 * @return
 */
export const CreateUser = (data) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {

        CreateUserInCollection(data)
        resolve({ status: 'ok', data: userCredential })
      })
      .catch(() => {
        reject('error')
        /*   const errorCode = error.code
        const errorMessage = error.message */
        // ..
      })
  })
}

const CreateUserInCollection = async (data) => {
  await setDoc(doc(db, 'users', data.email), data)
}

/**
 * 
 */
export const onSignOut = () => {
 return new Promise((resolve) => {
  signOut(auth).then(() => {
    resolve('ok')
  }).catch(() => {
    Alert.alert('Ah ocurrido un error')
  });
 })
}
