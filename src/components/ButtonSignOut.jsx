import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import tailwind from 'twrnc'
import { initialState, setUser } from '../../app/features/userSlice'
import { onSignOut } from '../../services/Account'

const ButtonSignOut = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleSesion = () => {
    onSignOut().then((res) => {
      if (res == 'ok') {
        dispatch(setUser(initialState.user))
        navigation.navigate('login')
      }
    })
  }
  return (
    <TouchableOpacity
      style={tailwind`flex-row items-center gap-2 ml-5 mb-3 bg-red-400 self-start p-1.5 rounded-md`}
      onPress={() => handleSesion()}
    >
      <AntDesign name='logout' size={20} color='white' />
      <Text category='c1' style={tailwind`text-white`}>
        {'Cerrar Sesion'}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonSignOut
