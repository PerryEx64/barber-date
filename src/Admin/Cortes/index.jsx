import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import ButtonSignOut from '../../components/ButtonSignOut'
import InputProfile from '../../components/InputProfile'
import tailwind from 'twrnc'

const Cortes = () => {
  return (
    <Layout level='1' style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <Text category='h6' style={tailwind`ml-5 mt-8`}>
          {'Informacion del Admin'}
        </Text>
        <Layout style={tailwind`w-9/12 ml-5 gap-5 mt-3`}>
          <InputProfile label={'Nombre'} value={'Admin'} />
        </Layout>
      </View>

      <ButtonSignOut />
    </Layout>
  )
}

export default Cortes
