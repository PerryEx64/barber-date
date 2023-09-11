import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Input, Layout } from '@ui-kitten/components'
import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { GetBarbershops } from '../../../services/BarberShop'
import CardBarbershop from '../../Client/Barber/components/CardBarbershop'

const BarbersShop = () => {
  const [search, setSearch] = React.useState('')
  const [barbershops, setBarbershops] = React.useState([])
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('barbershopCreate')
  }

  React.useEffect(() => {
    GetBarbershops(setBarbershops)
  }, [])

  return (
    <Layout level='1' style={styles.container}>
      <View style={styles.header}>
        <Input
          style={{ width: '80%' }}
          size='medium'
          placeholder='Buscar'
          value={search}
          onChangeText={(change) => setSearch(change)}
        />
        <TouchableOpacity onPress={handleNavigation}>
          <Ionicons name='md-add-circle-sharp' size={36} color='black' />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.barbershops}
        data={barbershops}
        renderItem={({ item }) => <CardBarbershop barbershop={item} admin />}
      />
    </Layout>
  )
}

export default BarbersShop

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  barbershops: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15
  }
})
