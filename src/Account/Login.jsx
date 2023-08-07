import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../app/features/userSlice'
import { Layout, Button } from '@ui-kitten/components/ui'

const Login = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
 

  const test = () => {
    dispatch(setUser({
      nombre: 'Brian',
      apellido: 'Garcia',
      tipo_usuario: 'cliente'
    }))

    navigation.navigate('Client')
  }
  
  return (
    <Layout style={{flex: 1, justifyContent: 'center'}} >
      <Button onPress={() => test()} appearance='outline'>Navegacion</Button>
    </Layout>
  )
}

export default Login