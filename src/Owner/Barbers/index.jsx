import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Input, Layout } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectUpdateBarbers } from '../../../app/features/updateSlice'
import { selectUser } from '../../../app/features/userSlice'
import { GetBarbers } from '../../../services/BarberShop'
import ListBarbers from './components/ListBarbers'

const Barbers = () => {
  const [search, setSearch] = React.useState('')
  const updated = useSelector(selectUpdateBarbers)
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('crearbarberos')
  }

  React.useEffect(() => {
    /* GetBarbershop(dispatch, user.idBarbershop) */
    GetBarbers(dispatch, user.idBarbershop)
  }, [updated])

  return (
    <Layout level='1' style={{flex: 1}}>
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

      <ListBarbers idBarbershop={user.idBarbershop}/>
    </Layout>
  )
}

export default Barbers

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
