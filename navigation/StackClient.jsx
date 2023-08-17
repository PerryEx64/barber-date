import { Fontisto, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Barber from '../src/Client/Barber'
import Profile from '../src/Client/Profile'

const StackClient = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='barberClient'
        component={Barber}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <Fontisto name='date' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='profile'
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='person-circle-outline' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default StackClient
