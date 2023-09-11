import { useNavigation } from '@react-navigation/native'
import { Input, Text } from '@ui-kitten/components'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectUpdateBarbers,
  setUpdateBarbers
} from '../../app/features/updateSlice'
import { selectUser } from '../../app/features/userSlice'
import { CreateBarbers } from '../../services/Owner'
import ButtonSave from '../Account/components/ButtonSave'
import CircleTop from '../Account/components/CircleTop'
import ButtonBack from '../components/ButtonBack'
import KeyboardAvoidContainer from '../components/KeyboardAvoidContainer'
import { BarbersRegister } from '../utils/Init/owner.init'

const Owner = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const updated = useSelector(selectUpdateBarbers)
  const navigation = useNavigation()
  const { handleSubmit, control, reset } = useForm({
    defaultValues: BarbersRegister
  })

  const onSubmit = (form) => {
    try {
      CreateBarbers(form, user.idBarbershop)
      dispatch(setUpdateBarbers(!updated))
      reset(BarbersRegister)
      navigation.goBack()
    } catch (error) {
      Alert.alert('Ah ocurrido un error')
    }
  }

  return (
    <KeyboardAvoidContainer>
      <CircleTop />
      <View style={styles.header}>
        <ButtonBack />
        <Text category='h6'>{'Registro Barberos'}</Text>
        <View />
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <Controller
          name='name'
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Nombre Completo'}
              style={{ marginBottom: 10 }}
              placeholder='nombre'
              value={value}
              onChangeText={onChange}
              size='medium'
            />
          )}
        />

        <Controller
          name='id'
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Correo Electronico'}
              style={{ marginBottom: 10 }}
              placeholder='correo electronico'
              keyboardType='email-address'
              value={value}
              onChangeText={onChange}
              size='medium'
            />
          )}
        />
        <ButtonSave
          title='registrar'
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </View>
    </KeyboardAvoidContainer>
  )
}

export default Owner

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30
  }
})
