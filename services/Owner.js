import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, updateDoc, writeBatch } from 'firebase/firestore'
import { Alert } from 'react-native'
import { MessageAuth } from './BarberShop'
import { auth, db } from './CloudConection'


export const CreateBarbers = (form, idBarbershop) => {
  const formUser = {
    idBarbershop: idBarbershop,
    name: form.name,
    email: form.id,
    type: 'barber'
  }
  createUserWithEmailAndPassword(auth, form.id, '12345678')
    .then(async () => {
      //crea barbero
      const batch = writeBatch(db)
      /**
       * Gurdamos informacion del barbero en 2 lugares
       */

      // Lo agregamos a la barberia
      const refSaveBarber = doc(
        db,
        'barbershops',
        idBarbershop,
        'barbers',
        form.id
      )
      batch.set(refSaveBarber, form)

      // Lo agregamos a la coleccion de usuario
      const refUsuario = doc(db, 'users', form.id)
      batch.set(refUsuario, formUser)

      batch.commit()

      Alert.alert('Barbero creado', form.name)
    })
    .catch((err) => {
      const errorCode = err.code
      Alert.alert(
        `${MessageAuth(errorCode)}`,
        'intente con un correo diferente'
      )
    })
}

export const UpdateStatusBarber = async (idBarbershop, idBarber, status) => {
  const barbershopRef = doc(
    db,
    'barbershops',
    idBarbershop,
    'barbers',
    idBarber
  )
  await updateDoc(barbershopRef, {
    enabled: status
  })
}
