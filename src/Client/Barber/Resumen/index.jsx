import { uuidv4 } from '@firebase/util'
import { useNavigation } from '@react-navigation/native'
import { Button, Text } from '@ui-kitten/components'
import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { selectService } from '../../../../app/features/serviceSlice'
import { selectUser } from '../../../../app/features/userSlice'
import usePrice from '../../../../hooks/usePrice'
import { CreateOrder } from '../../../../services/Order'
import ResumenView from '../../../components/ResumenView'
import Title from './components/Title'
import Toast from 'react-native-root-toast'

const Resumen = () => {
  const service = useSelector(selectService)
  const user = useSelector(selectUser)
  const navigation = useNavigation()
  const { calculatePrice } = usePrice()

  const handleNavigation = () => {
    const order = { ...service, id: uuidv4(), created_at: new Date() }

    //Guarda id del servicio en la coleccion de services
    CreateOrder(order, user).then(() => {
      Alert.alert('Orden Creada', `orden no. ${order.id.split('-')[0]}`)
      Toast.show('Orden Creada')
      navigation.navigate('stackDates')
    })
  }
  return (
    <ResumenView title={'Resumen de Pago'}>
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
          onPress={handleNavigation}
          style={styles.btn}
          size='small'
          appearance='outline'
        >
          {'Confirmar Cita'}
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
