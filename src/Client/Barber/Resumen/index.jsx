import { uuidv4 } from '@firebase/util'
import { useNavigation } from '@react-navigation/native'
import { Button, Text } from '@ui-kitten/components'
import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Toast from 'react-native-root-toast'
import { useDispatch, useSelector } from 'react-redux'
import { selectService } from '../../../../app/features/serviceSlice'
import {
  selectMaxService,
  setMaxService,
  setTime
} from '../../../../app/features/timeSlice'
import { selectUser } from '../../../../app/features/userSlice'
import usePrice from '../../../../hooks/usePrice'
import { CreateOrder } from '../../../../services/Order'
import ResumenView from '../../../components/ResumenView'
import Title from './components/Title'

const Resumen = () => {
  const service = useSelector(selectService)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { calculatePrice } = usePrice()
  const maxService = useSelector(selectMaxService)
  const [disabled, setDisabled] = React.useState(false)

  const handleNavigation = () => {
    const order = { ...service, id: uuidv4(), created_at: new Date() }
    setDisabled(true)
    if (maxService == 2) {
      Alert.alert('Debes de esperar 5min para poder hacer un nuevo pedido')
      setTimeout(() => {
        dispatch(setMaxService())
      }, 5000)
      navigation.reset({
        index: 0,
        routes: [{ name: 'stackDates' }]
      })
    } else {
      CreateOrder(order, user).then(() => {
        Alert.alert('Orden Creada', `orden no. ${order.id.split('-')[0]}`)
        Toast.show('Orden Creada')
        dispatch(setTime())
        navigation.reset({
          index: 0,
          routes: [{ name: 'stackDates' }]
        })
      })
    }
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
          disabled={disabled}
          style={styles.btn}
          size='small'
          appearance='outline'
        >
          {'Confirmar cita'}
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
