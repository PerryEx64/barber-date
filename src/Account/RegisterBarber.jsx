import { useNavigation } from '@react-navigation/native'
import { Input } from '@ui-kitten/components'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, Button, View } from 'react-native'
import tailwind from 'twrnc'
import KeyboardAvoidContainer from '../components/KeyboardAvoidContainer'
import ButtonSave from './components/ButtonSave'
import CircleTop from './components/CircleTop'
import { CreateUser } from '../../services/Account'
import useGetDataUser from '../../hooks/useGetDataUser'
import { useSelector } from 'react-redux'
import { selectAvatarChosen } from '../../app/features/accountSlice'
import Header from './components/Header'
import Toast from 'react-native-root-toast'

const RegisterBarber = () => {
  const navigation = useNavigation()
  const { getUser } = useGetDataUser()
  const avatarChosen = useSelector(selectAvatarChosen)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      exp: 0,
      barbershop: '',
      phone: ''
    }
  })

  const onSubmit = (data) => {
    const result = {
      name: data.name,
      email: data.email,
      password: data.password,
      exp: Number(data.exp),
      type: 'barber',
      avatar: avatarChosen,
      phone: data.phone
    }

    CreateUser(result)
      .then((res) => {
        Toast.show('Usuario creado')
        Alert.alert('Bienvenido')
        getUser(res.data)
      })
      .catch(() => {
        Alert.alert('Ah ocurrido un error')
      })
  }
  return (
    <KeyboardAvoidContainer>
      
      <CircleTop />
      <Header />
      <View style={tailwind`px-5`}>
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
              placeholder='nombre'
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
              label={'Numero de telefono'}
              style={{ marginBottom: 10 }}
              placeholder='telefono'
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

        <Controller
          name='exp'
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Experiencia'}
              style={{ marginBottom: 10 }}
              placeholder='nombre'
              keyboardType='number-pad'
              value={value.toString()}
              onChangeText={onChange}
              size='medium'
            />
          )}
        />

        <Button
          onPress={() => navigation.navigate('selectAvatar')}

          title='Selecciona Avatar'
        />
        <ButtonSave
          title='Registrarse'
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </View>
    </KeyboardAvoidContainer>
  )
}

export default RegisterBarber
