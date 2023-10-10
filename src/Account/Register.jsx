import { Input } from '@ui-kitten/components'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, ScrollView, View } from 'react-native'
import Toast from 'react-native-root-toast'
import tailwind from 'twrnc'
import useGetDataUser from '../../hooks/useGetDataUser'
import { CreateUser } from '../../services/Account'
import KeyboardAvoidContainer from '../components/KeyboardAvoidContainer'
import ButtonSave from './components/ButtonSave'
import CircleTop from './components/CircleTop'
import Header from './components/Header'

const Register = () => {
  const { getUser } = useGetDataUser()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      type: 'client'
    }
  })

  const onSubmit = (data) => {
    CreateUser(data)
      .then((res) => {
        if (res.status == 'ok') {
          Toast.show('usuario creado')
          Alert.alert('Bienvenido')
          getUser(res.data)
        }
      })
      .catch(() => {
        Alert.alert('Ah ocurrido un error')
      })
  }

  return (
    <KeyboardAvoidContainer>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <CircleTop />
        <ScrollView style={tailwind`px-5`}>
          <Header title={'Registro'} />

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
            name='email'
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

          <Controller
            name='phone'
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Numero de Telefono'}
                style={{ marginBottom: 10 }}
                placeholder='nombre'
                keyboardType='phone-pad'
                value={value}
                onChangeText={onChange}
                size='medium'
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Contrase;a'}
                style={{ marginBottom: 10 }}
                placeholder='nombre'
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
                size='medium'
              />
            )}
          />

          <ButtonSave
            title='Registrarse'
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidContainer>
  )
}

export default Register
