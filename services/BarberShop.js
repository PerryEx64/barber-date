import { createUserWithEmailAndPassword } from 'firebase/auth'
import { CreateUserInCollection } from './Account'
import { auth } from './CloudConection'

/**
 *
 * @param {*} data Informacion del formulario
 * @returns Object:{ status, data, key}
 */
export const CreateBarbershop = (data) => {
  console.log(data)
  //Obtener primera letra del primer nombre
  const name = data.name.slice(' ')[0]

  //Obtener el segundo a pellido
  const numberRandom = Math.floor(Math.random() * 2)
  const user = name + data.lastname.split(' ')[numberRandom]
  const date = new Date()
  const year = date.getFullYear()

  //creamos contrasena
  //Primer letra de su nombre, cualquier apellido y el a;o
  const password = user + year

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, data.email, password)
      .then((userCredential) => {
        CreateUserInCollection(data)
        resolve({ status: 'ok', data: userCredential, key: password })
      })
      .catch(() => {
        reject('error')
        /*   const errorCode = error.code
          const errorMessage = error.message */
        // ..
      })
  })
}
