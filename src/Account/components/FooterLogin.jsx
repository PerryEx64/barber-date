import { View, TouchableOpacity } from 'react-native'
import { Text } from '@ui-kitten/components'
import React from 'react'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const FooterLogin = () => {
    const navigation = useNavigation()
  return (
    <View style={tailwind`gap-1.5 m-5`}>
      <TouchableOpacity>
        <Text category='p2' style={tailwind`text-center`}>
          {'Se te olvido la contrase;a?'}
        </Text>
      </TouchableOpacity>

      <View style={tailwind`flex-row justify-center gap-1 items-center`}>
        <Text category='p2' style={tailwind`text-center`}>
          {'No tienes una cuenta?'}
        </Text>

        <TouchableOpacity 
        onPress={() => navigation.navigate('register')}>
          <Text category='s1' status='info' style={tailwind`text-center`}>
            {'registrate'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tailwind`flex-row justify-center gap-1 items-center`}>
          <Text category='p2' style={tailwind`text-center`}>
            {'Eres un barbero?'}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('registerBarber')}
          >
            <Text category='s1' status='info' style={tailwind`text-center`}>
              {'registrate'}
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default FooterLogin
