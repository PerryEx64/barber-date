import { Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Profile from '../src/Client/Profile'
import StackClientBarberClient from './StackClientBarberClient'
import StackClientDates from './Stacks/StackClientDates'

const StackClient = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='stackBarberClient'
        component={StackClientBarberClient}
        options={{
          title: 'Agendar',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Fontisto name='date' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='stackDates'
        component={StackClientDates}
        options={{
          title: 'Mis Citas',
          headerShown: false,
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
