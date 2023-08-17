import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../src/Account/Login'
import Register from '../src/Account/Register'

const StackAccount = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='login'>
     
        <Stack.Screen
          name='login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='register'
          component={Register}
          options={{
            headerShown: false
          }}
        />
     
    </Stack.Navigator>
  )
}

export default StackAccount
