import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import StackAccount from './StackAccount'
import StackBarber from './StackBarber'
import StackClient from './StackClient'
import StackOwner from './StackOwner'
import TabAdmin from './TabAdmin'

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
        name='TabAdmin'
        component={TabAdmin}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='StackClient'
        component={StackClient}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='StackBarber'
        component={StackBarber}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='StackOwner'
        component={StackOwner}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigation
