import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import BarbersShop from '../../src/Admin/BarbersShop'
import CreateBarbersShop from '../../src/Admin/CreateBarbersShop'

const StackBarbershop = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='barbershop'
        component={BarbersShop}
        options={{
          title: 'Barberias'
        }}
      />

      <Stack.Screen
        name='barbershopCreate'
        component={CreateBarbersShop}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default StackBarbershop
