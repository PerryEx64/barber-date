import { useNavigation } from '@react-navigation/native'
import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setService } from '../../../app/features/serviceSlice'
import { selectUser } from '../../../app/features/userSlice'
import { GetOrder, GetOrders } from '../../../services/Order'

const Reservations = () => {
  const [dates, setDates] = React.useState('')
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  React.useEffect(() => {
    GetOrders(user.email, setDates)
  }, [])


  const handleNavigation = (id) => {
    // eslint-disable-next-line no-unused-vars
    GetOrder(id).then((res) => {
      // eslint-disable-next-line no-unused-vars
      const { created_at, id, ...order } = res
      dispatch(setService(order))
      navigation.navigate('resumenReservationes')
    })
  }
  return (
    <Layout level='1' style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={dates}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentFlat}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.content}
            onPress={() => handleNavigation(item.id)}
          >
            <Text category='h6' status='danger' style={{ textAlign: 'center' }}>
              {item.client}
            </Text>
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                maxWidth: '90%',
                marginBottom: 10
              }}
            >
              {item.phone}
            </Text>
            <View
              style={{ flexDirection: 'row', gap: 4, justifyContent: 'center' }}
            >
              <Text category='s2' style={{ fontSize: 16 }}>
                horario:
              </Text>
              <Text status='info' category='label' style={{ fontSize: 16 }}>
                de {item.schedule}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Layout>
  )
}

export default Reservations

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#34343434',
    padding: 10,
    marginHorizontal: 10
  },
  contentFlat: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
