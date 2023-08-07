import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../src/Account/Login'
import Client from '../src/Client'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}
      />
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

export default AppNavigation
