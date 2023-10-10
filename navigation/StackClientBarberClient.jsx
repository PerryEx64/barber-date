import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Barber from '../src/Client/Barber'
import Schedule from '../src/Client/Barber/Schedule'
import Cortes from '../src/Client/Barber/Cortes'
import Extras from '../src/Client/Barber/Extras'
import Resumen from '../src/Client/Barber/Resumen'

const StackClientBarberClient = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='StackAccount'>
      <Stack.Screen
        name='barberClient'
        component={Barber}
        options={{
            headerTitle: 'Barberias'
        }}
      />
      <Stack.Screen
        name='schedule'
        component={Schedule}
        options={{
            headerTitle: 'Horarios'
        }}
      />
      <Stack.Screen
        name='cortes'
        component={Cortes}
        options={{
            headerTitle: 'Estilos de cortes'
        }}
      />
      <Stack.Screen
        name='extras'
        component={Extras}
        options={{
            headerTitle: 'Extras'
        }}
      />
      <Stack.Screen
        name='resumen'
        component={Resumen}
        options={{
            headerTitle: 'Resumen'
        }}
      />
    </Stack.Navigator>
  )
}

export default StackClientBarberClient
