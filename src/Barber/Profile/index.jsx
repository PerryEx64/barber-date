import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { useSelector } from 'react-redux'
import tailwind from 'twrnc'
import {
  selectUser
} from '../../../app/features/userSlice'
import ButtonSignOut from '../../components/ButtonSignOut'
import InputProfile from '../../components/InputProfile'

const Profile = () => {
  const user = useSelector(selectUser)

  return (
    <Layout level='1' style={{ flex: 1, justifyContent: 'space-between' }}>
      <Text category='h5' style={tailwind`text-center mt-4`}>
        {'Informacion Personal'}
      </Text>

      <Layout style={tailwind`w-2/3 h-9/12 ml-5 gap-5 mt-5`}>
        <InputProfile label={'Nombre'} value={user.name} />
        <InputProfile label={'Correo Electronico'} value={user.email} />
      </Layout>

      <ButtonSignOut />
    </Layout>
  )
}

export default Profile
