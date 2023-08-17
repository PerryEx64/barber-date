import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Profile from '../src/Barber/Profile';
import Reservations from '../src/Barber/Reservations'

const StackBarber = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen name="Reservations" component={Profile} />
      <Tab.Screen name="Profile" component={Reservations} />
    </Tab.Navigator>
  )
}

export default StackBarber
