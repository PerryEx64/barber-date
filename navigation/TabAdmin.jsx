import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image } from 'react-native'
import Cortes from '../src/Admin/Cortes'
import StackBarbershop from './Stacks/StackBarbershop'

const TabAdmin = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='stackBarbershop'
        component={StackBarbershop}
        options={{
          title: 'Barberias',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require('../assets/icons/barberia.png')}
              style={{ height: size, width: size, tintColor: color }}
            />
          )
        }}
      />
      <Tab.Screen
        name='cortes'
        component={Cortes}
        options={{
          title: 'Perfil',
          headerShown: true,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='person-circle-outline' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabAdmin
