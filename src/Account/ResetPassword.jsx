import { Input } from '@ui-kitten/components'
import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView } from 'react-native'
import Toast from 'react-native-root-toast'
import { auth } from '../../services/CloudConection'
import KeyboardAvoidContainer from '../components/KeyboardAvoidContainer'
import { MessageAuth } from '../utils/MessageAuth'
import ButtonSave from './components/ButtonSave'
import CircleTop from './components/CircleTop'
import Header from './components/Header'

const ResetPassword = () => {
  const [disabled, setDisabled] = React.useState(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = (form) => {
    setDisabled(true)
    sendPasswordResetEmail(auth, form.email)
      .then(() => {
        Toast.show('Correo enviado')
      })
      .catch((error) => {
        setDisabled(false)
        Toast.show(`${MessageAuth(error.code)}`)
      })
  }
  return (
    <KeyboardAvoidContainer>
      <CircleTop />
      <ScrollView style={{ marginHorizontal: 20 }}>
        <Header title={'Restablecer Contraseña'} />
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
              placeholder='correo'
              value={value}
              onChangeText={onChange}
              size='medium'
            />
          )}
        />

        {disabled == true ? (
          <></>
        ) : (
          <ButtonSave
            title='Recuperar'
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        )}
      </ScrollView>
    </KeyboardAvoidContainer>
  )
}

export default ResetPassword
