import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image } from 'react-native'
import Profile from '../src/Owner/Profile'
import StackBarbersOwner from './Stacks/StackBarbersOwner'
import { Ionicons} from '@expo/vector-icons'

const StackOwner = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='stackBarbersOwner'
        component={StackBarbersOwner}
        options={{
          title: 'Barberos',
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
        name='profileOwner'
        component={Profile}
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

export default StackOwner
