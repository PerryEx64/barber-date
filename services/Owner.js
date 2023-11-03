import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, updateDoc, writeBatch } from 'firebase/firestore'
import { Alert } from 'react-native'
import { MessageAuth } from './BarberShop'
import { auth, db } from './CloudConection'
import Toast from 'react-native-root-toast'


export const CreateBarbers = (form, idBarbershop) => {
  const formUser = {
    idBarbershop: idBarbershop,
    name: form.name,
    email: form.id,
    type: 'barber'
  }
  createUserWithEmailAndPassword(auth, form.id, '12345678')
    .then(async () => {

      const batch = writeBatch(db)

      const refSaveBarber = doc(
        db,
        'barbershops',
        idBarbershop,
        'barbers',
        form.id
      )
      batch.set(refSaveBarber, form)

      const refUsuario = doc(db, 'users', form.id)
      batch.set(refUsuario, formUser)

      batch.commit()

      Toast.show('Barberos Creado')
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
