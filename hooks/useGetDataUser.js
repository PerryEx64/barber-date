import { useNavigation } from '@react-navigation/native'
import { doc, getDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setUser } from '../app/features/userSlice'
import { db } from '../services/CloudConection'
import { userTypeNavigate } from '../services/User'

function useGetDataUser() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  /**
   * Obtiene unicamente un usuario de la coleccion users.
   * @param {*} userCredential
   */
  const getUser = async (userCredential) => {
    const docRef = doc(db, 'users', userCredential.user.email)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const user = docSnap.data()

      //guarda informacion del usuario
      dispatch(setUser(user))

      //navegacion
      navigation.navigate(userTypeNavigate(user.type))
    }
  }
  return { getUser }
}

export default useGetDataUser
