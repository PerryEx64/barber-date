import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyDates from '../../src/Client/MyDates'
import Resumen from '../../src/Client/MyDates/Resumen'

const StackClientDates = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='mydates'>
      <Stack.Screen
        name='mydates'
        component={MyDates}
        options={{
          headerTitle: 'Mis Citas'
        }}
      />

      <Stack.Screen
        name='resumenDates'
        component={Resumen}
        options={{
          headerTitle: 'Resumen'
        }}
      />
    </Stack.Navigator>
  )
}

export default StackClientDates
