import { createUserWithEmailAndPassword } from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  writeBatch
} from 'firebase/firestore'
import { Alert } from 'react-native'
import { setBarbers } from '../app/features/barberSlice'
import { setBarbershop } from '../app/features/barbershopSlice'
import { auth, db } from './CloudConection'

export const MessageAuth = (message) => {
  const errors = {
    'auth/email-already-in-use': 'Correo electronico ya utilizado',
    'auth/invalid-email': 'Correo electronico invalido'
  }
  return errors[message]
}

export const CreateUserBarbershop = (form) => {
  const { type, ...formBarbershop } = form

  const formUser = {
    idBarbershop: form.id,
    name: form.owner,
    email: form.email,
    type: form.type
  }

  createUserWithEmailAndPassword(auth, form.email, '12345678')
    .then(() => {
      const batch = writeBatch(db)

      const refUsuario = doc(db, 'users', form.email)
      batch.set(refUsuario, formUser)

      const refBarberia = doc(db, 'barbershops', form.id)
      batch.set(refBarberia, formBarbershop)

      batch.commit()
      Alert.alert('Barberia creada', form.nameBarbershop)
    })
    .catch((err) => {
      const errorCode = err.code
      Alert.alert(
        `${MessageAuth(errorCode)}`,
        'intente con un correo diferente'
      )
    })
}

export const GetBarbershops = (setData) => {
  onSnapshot(collection(db, 'barbershops'), (doc) => {
    const result = doc.docs.map((doc) => doc.data())
    setData(result)
  })
}

export const GetBarbers = (dispatch, idBarbershop) => {
  onSnapshot(collection(db, 'barbershops', idBarbershop, 'barbers'), (doc) => {
    const result = doc.docs.map((doc) => doc.data())
    dispatch(setBarbers(result))
  })
}

export const GetBarbershop = async (dispatch, idBarbershop) => {
  const docRef = doc(db, 'barbershops', idBarbershop)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    dispatch(setBarbershop(docSnap.data()))
  } else {
    dispatch(setBarbershop([]))
  }
}
