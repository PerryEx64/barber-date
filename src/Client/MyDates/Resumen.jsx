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
import ResumenView from '../../components/ResumenView'
import Title from '../Barber/Resumen/components/Title'
import { selectUser } from '../../../app/features/userSlice'

const Resumen = () => {
  const service = useSelector(selectService)
  const client = useSelector(selectBarberClient)
  const user = useSelector(selectUser)
  const navigation = useNavigation()
  const { calculatePrice } = usePrice()

  const handleDeleteOrder = () => {

    const dataClient = {
      email: user.email,
      id: client.id
    }
    try {
      DeleteOrdersFinishes(dataClient, service.barber.id).then(() => {
        navigation.goBack()
        Toast.show('Servicio Cancelado')
      })
    } catch (error) {
      console.error('error 01')
    }
  }

  return (
    <ResumenView title={'Cita Barbero'}>
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
          status='danger'
          size='small'
          onPress={() => handleDeleteOrder()}
          style={{ marginTop: 20, alignSelf: 'center' }}
        >
          {'Cancelar'}
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
