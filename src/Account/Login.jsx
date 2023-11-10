import { Ionicons } from '@expo/vector-icons'
import { Button, Input, Spinner, Text } from '@ui-kitten/components/ui'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native'
import Toast from 'react-native-root-toast'
import tailwind from 'twrnc'
import useGetDataUser from '../../hooks/useGetDataUser'
import { auth } from '../../services/CloudConection'
import KeyBoardAvoidContainer from '../components/KeyboardAvoidContainer'
import { MessageAuth } from '../utils/MessageAuth'
import CircleTop from './components/CircleTop'
import FooterLogin from './components/FooterLogin'

const Login = () => {
  const [loading, setLoading] = React.useState(false)
  const { getUser } = useGetDataUser()
  const [secureTextEntry, setSecureTextEntry] = React.useState(true)
  const widthScreen = Dimensions.get('window')
  const { control, handleSubmit } = useForm({
    defaultValues: {
      usuario: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, data.usuario, data.password)
      .then((userCredential) => {
        getUser(userCredential)

        setTimeout(() => {
          setLoading(false)
        }, 1000)
        Toast.show('Bienvenido')
      })
      .catch((error) => {
        setTimeout(() => {
          Toast.show(`${MessageAuth(error.code)}`)
          setLoading(false)
        }, 2000)
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
    <KeyBoardAvoidContainer>
      <View
        style={{ height: widthScreen.height, justifyContent: 'space-between' }}
      >
        <CircleTop />
        <View style={{ marginHorizontal: 25 }}>
          <Text
            category='h5'
            style={{
              marginBottom: 15,
              textAlign: 'center',
              alignSelf: 'center'
            }}
          >
            {'Iniciar Sesión'}
          </Text>

          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Usuario'}
                style={tailwind`mb-4 rounded-lg`}
                placeholder='nombre de usuario'
                value={value}
                onChangeText={onChange}
                size='medium'
              />
            )}
            name='usuario'
          />

          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Contraseña'}
                disabled={loading}
                style={tailwind`mb-4 rounded-lg`}
                placeholder='contraseña'
                value={value}
                onChangeText={onChange}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                size='medium'
              />
            )}
            name='password'
          />

          {loading ? (
            <View style={tailwind`self-center mt-5`}>
              <Spinner status='warning' size='giant' />
            </View>
          ) : (
            <View>
              <Button
                disabled={loading}
                onPress={handleSubmit(onSubmit)}
                style={tailwind`mt-4 rounded-lg`}
              >
                Iniciar Sesión
              </Button>
            </View>
          )}
        </View>
        <FooterLogin />
      </View>
    </KeyBoardAvoidContainer>
  )
}

export default Login
