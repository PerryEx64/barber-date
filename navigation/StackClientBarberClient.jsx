import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Barber from '../src/Client/Barber'
import Schedule from '../src/Client/Barber/Schedule'

const StackClientBarberClient = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='StackAccount'>
      <Stack.Screen
        name='barberClient'
        component={Barber}
        options={{
            headerTitle: 'Barberias'
        }}
      />
      <Stack.Screen
        name='schedule'
        component={Schedule}
        options={{
            headerTitle: 'Horarios'
        }}
      />
    </Stack.Navigator>
  )
}

export default StackClientBarberClient
