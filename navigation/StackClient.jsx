import { Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import MyDates from '../src/Client/MyDates'
import Profile from '../src/Client/Profile'
import StackClientBarberClient from './StackClientBarberClient'

const StackClient = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='stackBarberClient'
        component={StackClientBarberClient}
        options={{
          title: 'Citas',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Fontisto name='date' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='mydates'
        component={MyDates}
        options={{
          title: 'Mis Citas',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name='clipboard-list-outline'
              size={size}
              color={color}
            />
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
