import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Owner from '../../src/Owner'
import Barbers from '../../src/Owner/Barbers'

const StackBarbersOwner = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='barbersOwner'
        component={Barbers}
        options={{
          title: 'Barberos'
        }}
      />

      <Stack.Screen
        name='crearbarberos'
        component={Owner}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default StackBarbersOwner
