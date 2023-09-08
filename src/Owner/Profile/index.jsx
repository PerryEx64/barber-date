import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tailwind from 'twrnc'
import { selectBarbershop } from '../../../app/features/barbershopSlice'
import { selectUser } from '../../../app/features/userSlice'
import { GetBarbershop } from '../../../services/BarberShop'
import ButtonSignOut from '../../components/ButtonSignOut'
import InputProfile from '../../components/InputProfile'

const Profile = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const barbershop = useSelector(selectBarbershop)

  React.useEffect(() => {
    GetBarbershop(dispatch, user.idBarbershop)
  }, [])

  return (
    <Layout level='1' style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <Text category='h6' style={tailwind`ml-5 mt-8`}>
          {'Informacion Personal'}
        </Text>

        <Layout style={tailwind`w-9/12 ml-5 gap-5 mt-3`}>
          <InputProfile label={'Propietario'} value={user.name} />
          <InputProfile label={'Correo Electronico'} value={user.email} />
        </Layout>

        <Text category='h6' style={tailwind`ml-5 mt-8`}>
          {'Informacion Barberia'}
        </Text>

        <Layout style={tailwind`w-9/12 ml-5 gap-5 mt-3`}>
          <InputProfile
            label={'Nombre Barberia'}
            value={barbershop.nameBarbershop}
            multiline
          />
          <InputProfile
            label={'Direccion'}
            value={barbershop.addreess}
            multiline
          />
          {/* <InputProfile
            label={'Cantidad Barberos'}
            value={String(barbershop.barbers.length)}
          /> */}
        </Layout>
      </View>

      <ButtonSignOut />
    </Layout>
  )
}

export default Profile
