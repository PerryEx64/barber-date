import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tailwind from 'twrnc'
import {
  initialState,
  selectUser,
  setUser
} from '../../../app/features/userSlice'
import { onSignOut } from '../../../services/Account'
import InputProfile from '../../components/InputProfile'
import Toast from 'react-native-root-toast'

const Profile = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleSesion = () => {
    onSignOut().then((res) => {
      if (res == 'ok') {
        dispatch(setUser(initialState.user))
        Toast.show('Sesion Terminada')
        navigation.navigate('login')
      }
    })
  }
  return (
    <Layout level='1' style={{ flex: 1, justifyContent: 'space-between' }}>
      <Text category='h5' style={tailwind`text-center mt-4`}>
        {'Informacion Personal'}
      </Text>

      <Layout style={tailwind`w-2/3 h-9/12 ml-5 gap-5 mt-5`}>
        <InputProfile label={'Nombre'} value={user.name} />
        <InputProfile label={'Telefono'} value={user.phone} />
        <InputProfile label={'Correo Electronico'} value={user.email} />
      </Layout>

      <TouchableOpacity
        style={tailwind`flex-row items-center gap-2 ml-5 mb-3 bg-red-400 self-start p-1.5 rounded-md`}
        onPress={() => handleSesion()}
      >
        <AntDesign name='logout' size={20} color='white' />
        <Text category='c1' style={tailwind`text-white`}>
          {'Cerrar Sesion'}
        </Text>
      </TouchableOpacity>
    </Layout>
  )
}

export default Profile
