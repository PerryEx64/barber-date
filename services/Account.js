import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, runTransaction, setDoc } from 'firebase/firestore'
import { Alert } from 'react-native'
import { auth, db } from './CloudConection'

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
      })
  })
}

export const CreateUserInCollection = async (data) => {
  await setDoc(doc(db, 'users', data.email), data)
}

/**
 *
 */
export const onSignOut = () => {
  return new Promise((resolve) => {
    signOut(auth)
      .then(() => {
        resolve('ok')
      })
      .catch(() => {
        Alert.alert('Ah ocurrido un error')
      })
  })
}

export const CreateBarberShops = async ({ searchEmail, data }) => {
  const sfDocRef = doc(db, 'users', searchEmail)

  try {
    //Busca si el usuario existe o no existe
    const barbershops = await runTransaction(db, async (transaction) => {
      const sfDoc = await transaction.get(sfDocRef)

      /**
       * Si el usuario no existe
       */
      if (!sfDoc.exists()) {
        //crea el usuario
        createUserWithEmailAndPassword(auth, data.email, password).then(
          (userCredential) => {
            //Crea la barberia luego de crear el usuario
            const barbershoRef = doc(db, 'barbershops', 'NYC')
            transaction.set(barbershoRef, data)

            return Promise.resolve({
              status: 'ok',
              data: userCredential,
              key: password
            })
          }
        )
      }

      return 'exists'
    })
  } catch (error) {
    return Promise.reject('error')
  }
}
