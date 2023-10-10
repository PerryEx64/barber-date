import React from 'react'
import ResumenView from '../../components/ResumenView'
import { StyleSheet, View } from 'react-native'
import { Text } from '@ui-kitten/components'
import Title from '../Barber/Resumen/components/Title'
import { useSelector } from 'react-redux'
import { selectService } from '../../../app/features/serviceSlice'
import usePrice from '../../../hooks/usePrice'

const Resumen = () => {
  const service = useSelector(selectService)
  const { calculatePrice } = usePrice()
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

       {/*  <Text category='s1' style={styles.contentSubTitle}>
          {service.created_at} ceja
        </Text> */}
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
