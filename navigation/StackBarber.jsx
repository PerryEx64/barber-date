import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Profile from '../src/Barber/Profile'
import Schedule from '../src/Barber/Schedule'
import StackBarberReservation from './Stacks/StackBarberReservation'

const StackBarber = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='stackReservation'
        component={StackBarberReservation}
        options={{
          title: 'Reservaciones',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name='playlist-check'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name='schedule'
        component={Schedule}
        options={{
          title: 'Disponibilidad',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name='calendar' size={size} color={color} />
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

export default StackBarber
