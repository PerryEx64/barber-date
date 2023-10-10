import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Reservations from '../../src/Barber/Reservations'
import Resumen from '../../src/Barber/Reservations/Resumen'

const StackBarberReservation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='mydates'>
      <Stack.Screen
        name='reservations'
        component={Reservations}
        options={{
          headerTitle: 'Reservaciones'
        }}
      />

      <Stack.Screen
        name='resumenReservationes'
        component={Resumen}
        options={{
          headerTitle: 'Resumen'
        }}
      />
    </Stack.Navigator>
  )
}

export default StackBarberReservation
