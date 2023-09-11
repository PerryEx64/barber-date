import { uuidv4 } from '@firebase/util'
import { Input, Text } from '@ui-kitten/components'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, StyleSheet, View } from 'react-native'
import { CreateUserBarbershop } from '../../../services/BarberShop'
import ButtonSave from '../../Account/components/ButtonSave'
import CircleTop from '../../Account/components/CircleTop'
import ButtonBack from '../../components/ButtonBack'
import KeyboardAvoidContainer from '../../components/KeyboardAvoidContainer'

const CreateBarbersShop = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      id: uuidv4(),
      nameBarbershop: 'Espada Nueva',
      addreess: 'barrios la esperanza, 20 avenida 14 calle',
      phone: '30948390',
      owner: 'Daniel Osorio',
      email: 'danielosorio@gmail.com',
      type: 'owner',
      barbers: []
    }
  })

  const onSubmit = (form) => {
    CreateUserBarbershop(form)
  }

  return (
    <KeyboardAvoidContainer>
      <ScrollView>
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
            name='nameBarbershop'
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Nombre de Barberia'}
                style={{ marginBottom: 10 }}
                placeholder='barberia'
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
            name='owner'
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Dueno'}
                style={{ marginBottom: 10 }}
                placeholder='dueno'
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
                placeholder='correo'
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
      </ScrollView>
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
