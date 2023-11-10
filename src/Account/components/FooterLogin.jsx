import { useNavigation } from '@react-navigation/native'
import { Text } from '@ui-kitten/components'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'

const FooterLogin = () => {
  const navigation = useNavigation()

  const handleReset = () => {
    navigation.navigate('resetPassword')
  }

  const handleRegister = () => {
    navigation.navigate('register')
  }

  return (
    <View style={{gap: 5, margin: 10, justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text category='p2' style={tailwind`text-center`}>
          {'¿Se te olvido la contraseña?'}
        </Text>
        <TouchableOpacity onPress={handleReset}>
          <Text category='s1' status='info' style={tailwind`text-center`}>
            {'recuperar'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tailwind`flex-row justify-center gap-1 items-center`}>
        <Text category='p2' style={tailwind`text-center`}>
          {'¿No tienes una cuenta?'}
        </Text>

        <TouchableOpacity onPress={handleRegister}>
          <Text category='s1' status='info' style={tailwind`text-center`}>
            {'registrate'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FooterLogin
