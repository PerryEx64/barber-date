import { doc, getDoc } from 'firebase/firestore'
import { db } from './CloudConection'

/**
 * Obtiene la informacion de un unico usuario
 *
 * @param {*} email Correo electronico del usuario que se requiere la informacion
 */
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

/**
 * 
 * @param {*} typeUser puede ser unicamente cliente, propietario o barbero
 * @returns Pantalla correspondiente dependiendo su tipo de usuario
 */
export const userTypeNavigate = (typeUser) => {
  const navigations = {
    client: 'StackClient',
    owner: 'StackOwner',
    barber: 'StackBarber'
  }

  return navigations[typeUser]
}
