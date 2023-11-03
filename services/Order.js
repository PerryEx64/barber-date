import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  runTransaction,
  writeBatch
} from 'firebase/firestore'
import { db } from './CloudConection'

export const GetOrders = async (idUser, setData) => {
  try {
    onSnapshot(collection(db, 'users', idUser, 'orders'), (doc) => {
      const result = doc.docs.map((doc) => doc.data())
      setData(result)
    })
  } catch (error) {
    console.log(error)
  }
}

export const GetOrder = async (idOrder) => {
  const orderRef = doc(db, 'orders', idOrder)

  try {
    const query = await getDoc(orderRef)

    if (!query.exists) {
      throw 'no exist orden'
    }

    return query.data()
  } catch (error) {
    console.log(error)
  }
}

export const CreateOrder = async (order, user) => {
  const scheduleRef = doc(db, 'users', order.barber.id, 'settings', 'schedule')

  try {
    return await runTransaction(db, async (transaction) => {
      const query = await transaction.get(scheduleRef)

      if (!query.exists) {
        throw 'no existe horario'
      }


      const reservation = query.data().reservation
      const positionSchedule = reservation.findIndex(
        (data) => data.hour == order.shedule
      )

      const updateScheduleRef = doc(
        db,
        'users',
        order.barber.id,
        'settings',
        'schedule'
      )

   
      reservation[positionSchedule].status = false
      const newReservation = reservation

      transaction.update(updateScheduleRef, {
        reservation: newReservation
      })

      const setOrderRef = doc(db, 'orders', order.id)
      transaction.set(setOrderRef, order)

      const clientOrder = {
        id: order.id,
        direction: order.barberShop.direction,
        barber: order.barber.name,
        schedule: order.shedule
      }

      const saveOrderClientRef = doc(
        db,
        'users',
        user.email,
        'orders',
        order.id
      )
      transaction.set(saveOrderClientRef, clientOrder)

      const barberOrder = {
        id: order.id,
        client: user.name,
        email: user.email,
        phone: user.phone,
        schedule: order.shedule
      }

      const saveOrderBarberRef = doc(
        db,
        'users',
        order.barber.id,
        'orders',
        order.id
      )
      transaction.set(saveOrderBarberRef, barberOrder)
    })
  } catch (error) {
    console.log(error)
  }
}

export const DeleteOrdersFinishes = (client, barberEmail) => {
  try {
    const batch = writeBatch(db)

    const clientRef = doc(db, 'users', client.email, 'orders', client.id)
    batch.delete(clientRef)

    const barberRef = doc(db, 'users', barberEmail, 'orders', client.id)
    batch.delete(barberRef)

     return batch.commit()
  } catch (error) {
    console.log(error)
  }
}
