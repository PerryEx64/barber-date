import { useNavigation } from '@react-navigation/native'
import { Button, Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Toast from 'react-native-root-toast'
import { useSelector } from 'react-redux'
import { selectBarberClient } from '../../../app/features/barberSlice'
import { selectService } from '../../../app/features/serviceSlice'
import usePrice from '../../../hooks/usePrice'
import { DeleteOrdersFinishes } from '../../../services/Order'
import Title from '../../Client/Barber/Resumen/components/Title'
import ResumenView from '../../components/ResumenView'

const Resumen = () => {
  const service = useSelector(selectService)
  const client = useSelector(selectBarberClient)
  const navigation = useNavigation()
  const { calculatePrice } = usePrice()

  const handleDeleteOrderClient = async () => {
    try {
      DeleteOrdersFinishes(client, service.barber.id).then(() => {
        Toast.show('Orden finalizada')
        navigation.navigate('reservations')
      })
    } catch (error) {
      console.error('error 02')
    }
  }
  return (
    <ResumenView title={'Resumen'}>
      <>
        <View>
          <Text category='h6' status='danger' style={{ textAlign: 'center' }}>
            {service.barberShop.name.toUpperCase()}
          </Text>
          <Text
            category='label'
            status='info'
            style={{ textAlign: 'center', fontSize: 14 }}
          >
            Q{calculatePrice()}.00
          </Text>
        </View>

        <Title text={'Barbero'} />
        <Text category='s1' style={styles.content}>
          {service.barber.name.toUpperCase()}
        </Text>

        <Title text={'Corte'} />
        <Text category='s1' style={styles.content}>
          {service.corte.name.toUpperCase()}
        </Text>

        <Title text={'Extras'} />

        {service.extra.barba.name != '' ? (
          <Text category='s1' style={styles.contentSubTitle}>
            {service.extra.barba.name} barba
          </Text>
        ) : (
          <></>
        )}

        {service.extra.cejas.name != '' ? (
          <Text category='s1' style={styles.contentSubTitle}>
            {service.extra.cejas.name} ceja
          </Text>
        ) : (
          <></>
        )}

        <Button
          onPress={() => handleDeleteOrderClient()}
          size='small'
          status='warning'
          style={{ marginTop: 25 }}
        >
          {'Concluir Servicio'}
        </Button>
      </>
    </ResumenView>
  )
}

export default Resumen

const styles = StyleSheet.create({
  contentSubTitle: {
    marginTop: 3,
    marginLeft: 15
  },
  btn: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30
  },
  content: {
    marginLeft: 10
  }
})
