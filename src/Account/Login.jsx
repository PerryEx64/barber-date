import { Button, Input, Layout, Text } from '@ui-kitten/components/ui'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import tailwind from 'twrnc'

const Login = () => {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      usuario: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout style={styles.container}>
       {/*  <View style={tailwind`bg-red-400`} >
          <View style={tailwind`bg-gray-100 h-48 w-48 rounded-full relative`} />
          <View style={tailwind`bg-blue-600 h-36 w-36 rounded-full absolute`} />
        </View> */}
      <View style={styles.main} >
        <Text category='h5' style={{marginBottom: 15}} >{'Iniciar Sesion'}</Text>

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={'Usuario'}
              style={{marginBottom: 10}}
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
            placeholder='nombre de usuario'
            value={value}
            onChangeText={onChange}
            secureTextEntry={true}
            size='medium'
          />
          )}
          name='password'
        />

        <Button onPress={handleSubmit(onSubmit)} style={{marginTop: 20}}>Iniciar Sesion</Button>
      </View>
    </Layout>
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
  secondCircle: {

  }
})
