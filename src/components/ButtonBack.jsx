import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const ButtonBack = () => {
  const navigation = useNavigation()

  const handleBackNavigation = () => {
    navigation.goBack()
  }
  return (
    <TouchableOpacity onPress={handleBackNavigation}>
      <AntDesign name='back' size={28} color='black' />
    </TouchableOpacity>
  )
}

export default ButtonBack
