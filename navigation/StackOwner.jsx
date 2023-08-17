import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Owner from '../src/Owner'

const StackOwner = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='owner'>
      <Stack.Screen
        name='owner'
        component={Owner}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )
}

export default StackOwner