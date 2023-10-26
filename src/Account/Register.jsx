import { Input, Text } from '@ui-kitten/components'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import Toast from 'react-native-root-toast'
import tailwind from 'twrnc'
import useGetDataUser from '../../hooks/useGetDataUser'
import { CreateUser } from '../../services/Account'
import KeyboardAvoidContainer from '../components/KeyboardAvoidContainer'
import ButtonSave from './components/ButtonSave'
import CircleTop from './components/CircleTop'
import Header from './components/Header'
import { RulePassword } from '../utils/Rules'
import { Ionicons } from '@expo/vector-icons'

const Register = () => {
  const { getUser } = useGetDataUser()
  const [secureTextEntry, setSecureTextEntry] = React.useState(true)
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
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

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const renderIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      {secureTextEntry ? (
        <Ionicons name='eye-off' size={24} color='black' />
      ) : (
        <Ionicons name='eye' size={24} color='black' />
      )}
    </TouchableWithoutFeedback>
  )

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
            rules={RulePassword}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Contrase;a'}
                style={{ marginBottom: 10 }}
                placeholder='nombre'
                secureTextEntry={secureTextEntry}
                accessoryRight={renderIcon}
                value={value}
                onChangeText={onChange}
                size='medium'
              />
            )}
          />
          {errors.password && (
            <Text status='danger' category='label'>
              {errors.password.message}
            </Text>
          )}

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
