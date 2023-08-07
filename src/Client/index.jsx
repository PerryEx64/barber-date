import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/features/userSlice'

const Client = () => {
    const user = useSelector(selectUser)
  return (
    <View>
      <Text>{user.nombre}</Text>
    </View>
  )
}

export default Client