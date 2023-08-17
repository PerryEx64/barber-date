import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Client from '../src/Client'

const StackClient = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Client'>
      <Stack.Screen
        name='Client'
        component={Client}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )
}

export default StackClient
