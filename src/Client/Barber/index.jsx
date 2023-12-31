import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import tailwind from 'twrnc'
import {
  selectBarbers,
  selectBarbershopChosen
} from '../../../app/features/barberSlice'
import Search from '../../components/Search'
import useBarber from '../hooks/useBarber'
import Barbers from './components/Barbers'
import CardBarbershop from './components/CardBarbershop'

const Barber = () => {
  const { barberShops } = useBarber()
  const barberShopChosen = useSelector(selectBarbershopChosen)
  const barbers = useSelector(selectBarbers)

  const barbersLenght = barbers.length

  const handleEnabledBarbers = () => {
    // Filtramos primero todos los barberos que el propietario ah autorizado
    const barbersEnabled = barbers.filter((data) => data.enabled == true)

    // Filtramos los barberos que ya ah marcado que estan listo para empezar el dia
    const result = barbersEnabled.filter((data) => data.status == true)

    return result
  }

  return (
    <Layout
      style={tailwind`flex-1 px-8 pt-5 ${
        barbersLenght > 0 ? 'justify-around' : ''
      }`}
    >
      <Search data={barberShops} />

      <Text category='h5' style={tailwind`mb-3 text-center`}>
        {'Barberias Disponibles'}
      </Text>
      <View style={tailwind`${barbersLenght > 0 ? 'h-5/12' : 'h-9/12'} mb-2`}>
        <FlatList
          data={barberShops}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={tailwind`h-1 w-10/12 text-center`} />
          )}
          renderItem={({ item }) => <CardBarbershop barbershop={item} />}
        />
      </View>

      {barberShopChosen && (
        <View style={styles.barbers}>
          <FlatList
            data={handleEnabledBarbers()}
            contentContainerStyle={tailwind`gap-2 flex-row ${
              barbersLenght < 3 ? 'ml-auto mr-auto' : ''
            }`}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Barbers barber={item} />}
          />
        </View>
      )}
    </Layout>
  )
}

export default Barber

const styles = StyleSheet.create({
  barbers: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
