import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Input, Layout } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const BarbersShop = () => {
  const [search, setSearch] = React.useState('')
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('barbershopCreate')
  }
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
  }
})
