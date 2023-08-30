import { Input, Text } from '@ui-kitten/components'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, StyleSheet, View } from 'react-native'
import { CreateBarbershop as ServiceCreateBarberShop } from '../../../services/BarberShop'
import ButtonSave from '../../Account/components/ButtonSave'
import CircleTop from '../../Account/components/CircleTop'
import ButtonBack from '../../components/ButtonBack'
import KeyboardAvoidContainer from '../../components/KeyboardAvoidContainer'

const CreateBarbersShop = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      phone: '',
      addreess: '',
      email: '',
      type: 'owner'
    }
  })

  const onSubmit = (data) => {
    ServiceCreateBarberShop(data).then((res) => {
      Alert.alert('Barberia creada correctamente', `${res.data.key}`)
    })
  }
  return (
    <KeyboardAvoidContainer>
      <CircleTop />
      <View style={styles.header}>
        <ButtonBack />
        <Text category='h5' style={{ textAlign: 'center', marginBottom: 20 }}>
          {'Registro de Barberia'}
        </Text>
        <View />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <Controller
          name='name'
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Dueño de Barberia'}
              style={{ marginBottom: 10 }}
              placeholder='nombres'
              value={value}
              onChangeText={onChange}
              size='medium'
            />
          )}
        />

        <Controller
          name='lastname'
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Apellidos'}
              style={{ marginBottom: 10 }}
              placeholder='apellidos'
              value={value}
              onChangeText={onChange}
              size='medium'
            />
          )}
        />

        <Controller
          name='email'
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Correo Electronico'}
              style={{ marginBottom: 10 }}
              placeholder='nombre'
              keyboardType='email-address'
              value={value}
              onChangeText={onChange}
              size='medium'
            />
          )}
        />

        <Controller
          name='phone'
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Número de Teléfono'}
              style={{ marginBottom: 10 }}
              placeholder='número de teléfono'
              keyboardType='phone-pad'
              value={value}
              onChangeText={onChange}
              size='medium'
            />
          )}
        />

        <Controller
          name='addreess'
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Direccion de Barberia'}
              style={{ marginBottom: 10 }}
              placeholder='direccion'
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

export default CreateBarbersShop

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
