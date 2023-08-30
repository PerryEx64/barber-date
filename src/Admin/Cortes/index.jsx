import { Ionicons } from '@expo/vector-icons'
import { Input, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import { DATACORTES } from '../../utils/ConstantsCortes'

const Cortes = () => {
  const [search, setSearch] = React.useState('')
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
        <TouchableOpacity>
          <Ionicons name='md-add-circle-sharp' size={36} color='black' />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATACORTES}
        style={{ marginTop: 10 }}
        keyExtractor={(k) => k.id}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={item.img} style={styles.img} />
            <Text category='label' style={{ fontSize: 18 }}>
              {item.nombre.toUpperCase()}
            </Text>
          </View>
        )}
      />
    </Layout>
  )
}

export default Cortes

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
  cardContainer: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  img: {
    width: 50,
    height: 50
  }
})
