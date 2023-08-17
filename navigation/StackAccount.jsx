import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../src/Account/Login'
import Register from '../src/Account/Register'

const StackAccount = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            headerShown: false
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackAccount
