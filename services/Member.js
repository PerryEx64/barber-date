import { doc, getDoc, onSnapshot, writeBatch } from 'firebase/firestore'
import { Alert } from 'react-native'
import { db } from './CloudConection'

/**
 *
 * @param {*} idUser id para guardarlo en su coleccion
 */
export const CreateSchedule = async (idUser) => {
  const docRef = doc(db, 'settings', 'hours')
  const docSnap = await getDoc(docRef)


  const batch = writeBatch(db)

  if (docSnap.exists()) {

    const saveScheduleRef = doc(db, 'users', idUser, 'settings', 'schedule')
    batch.set(saveScheduleRef, {
      daily: docSnap.data().hours,
      reservation: []
    })

    batch.commit()
  } else {
    Alert.alert('ah ocurrido un error')
  }
}

/**
 * Obtiene el calendario del barbero
 * @param {*} idUser id del usuario
 * @param {*} setData hook para guardar la informacion obtenida
 */
export const GetSettingsBarber = (idUser, setData) => {
  try {
    onSnapshot(doc(db, 'users', idUser, 'settings', 'schedule'), (doc) => {
      const result = doc.data()
      if (result == undefined) {
        setData(null)
      } else {
        setData(doc.data().dayli)
      }
    })
  } catch (error) {
    setData(null)
  }
}

export const GetSchedule = async (idUser, setData) => {
  const docRef = doc(db, 'users', idUser, 'settings', 'schedule')
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    setData(docSnap.data().daily)
  } else {
    setData(null)
  }
}

export const SaveSchedule = async (idUser, schedule) => {

  const batch = writeBatch(db)

  const saveScheduleRef = doc(db, 'users', idUser, 'settings', 'schedule')

  batch.update(saveScheduleRef, {
    daily: schedule,
    reservation: schedule
  })

  batch.commit()
}
