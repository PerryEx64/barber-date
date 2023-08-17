import { AntDesign } from '@expo/vector-icons'
import { Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Header = () => {
  const navigation = useNavigation()
  const BackIcon = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name='back' size={28} color='black' />
    </TouchableOpacity>
  )

  const BackAction = () => <TopNavigationAction icon={BackIcon} />
  const Title = () => <Text category='h5'>{'Registro'}</Text>

  return (
    <>
      <TopNavigation
        accessoryLeft={BackAction}
        title={Title}
        alignment='center'
      />
    </>
  )
}

export default Header
