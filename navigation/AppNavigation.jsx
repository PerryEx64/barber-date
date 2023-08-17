import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import StackAccount from './StackAccount'
import StackClient from './StackClient'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='StackAccount'>
      <Stack.Screen
        name='StackAccount'
        component={StackAccount}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='StackClient'
        component={StackClient}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigation
