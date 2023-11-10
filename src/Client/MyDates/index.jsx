import { useNavigation } from '@react-navigation/native'
import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setBarberServiceClient } from '../../../app/features/barberSlice'
import { setService } from '../../../app/features/serviceSlice'
import { selectUser } from '../../../app/features/userSlice'
import { GetOrder, GetOrders } from '../../../services/Order'

const MyDates = () => {
  const user = useSelector(selectUser)
  const [dates, setDates] = React.useState('')
  const dispatch = useDispatch()
  const navigation = useNavigation()

  React.useEffect(() => {
    GetOrders(user.email, setDates)
  }, [])

  const handleNavigation = (item) => {
    GetOrder(item.id).then((res) => {
      const { created_at, id, ...orderBy } = res
      dispatch(setService(orderBy))
      dispatch(setBarberServiceClient(item))
      navigation.navigate('resumenDates')
    })
  }
  return (
    <Layout level='1' style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={dates}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentFlat}
        ListEmptyComponent={() => (
          <View>
            <Text status='warning' category='h6'>
              {'No tienes ninguna cita hecha!'}
            </Text>
            <Button
              size='small'
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate('barberClient')}
            >
              {'Hacer Cita!!!!'}
            </Button>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.content}
            onPress={() => handleNavigation(item)}
          >
            <Text category='h6' status='danger' style={{ textAlign: 'center' }}>
              {item.barber}
            </Text>
            <Text
              category='label'
              status='warning'
              style={{ textAlign: 'center' }}
            >
              ref.{item.id.split('-')[0]}
            </Text>
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                maxWidth: '90%',
                marginBottom: 10
              }}
            >
              {item.direction}
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

export default MyDates

const styles = StyleSheet.create({
  content: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#34343434',
    padding: 10
  },
  contentFlat: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
