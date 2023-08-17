import { Button, Input, Spinner, Text } from '@ui-kitten/components/ui'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native'
import tailwind from 'twrnc'
import useGetDataUser from '../../hooks/useGetDataUser'
import { auth } from '../../services/CloudConection'
import FooterLogin from './components/FooterLogin'

const Login = () => {
  const [loading, setLoading] = React.useState(false)
  const { getUser } = useGetDataUser()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      usuario: 'test@test.com',
      password: '12345678'
    }
  })

  const onSubmit = (data) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, data.usuario, data.password)
      .then((userCredential) => {
        //Busca el informacion del usuario
        getUser(userCredential)

        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
      .catch((error) => {
        console.log('not found', error.message)

        setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
  }

  return (
    <SafeAreaView style={tailwind`flex-1 relative justify-between`}>
      <View style={tailwind`items-end w-full`}>
        <Image
          // eslint-disable-next-line no-undef
          source={require('../../assets/circulo-login.png')}
          style={tailwind` h-56 w-56`}
        />
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
      >
        <View style={styles.main}>
          <Text category='h5' style={{ marginBottom: 15 }}>
            {'Iniciar Sesion'}
          </Text>

          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Usuario'}
                style={{ marginBottom: 10 }}
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
                label={'Usuario'}
                disabled={loading}
                placeholder='nombre de usuario'
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
                size='medium'
              />
            )}
            name='password'
          />

          {loading == true ? (
            <View style={tailwind`self-center mt-5`}>
              <Spinner status='warning' />
            </View>
          ) : (
            <Button
              disabled={loading}
              onPress={handleSubmit(onSubmit)}
              style={tailwind`mt-4`}
            >
              Iniciar Sesion
            </Button>
          )}
        </View>
      </KeyboardAvoidingView>

      <FooterLogin />

      <View style={tailwind`ml-5`}>
        <Image
          // eslint-disable-next-line no-undef
          source={require('../../assets/circulo-login-down.png')}
          style={tailwind` h-56 w-56`}
        />
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  main: {
    marginHorizontal: 25,
    padding: 2
  },
  firstCircle: {
    backgroundColor: 'blue'
  },
  secondCircle: {},
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3'
  }
})
