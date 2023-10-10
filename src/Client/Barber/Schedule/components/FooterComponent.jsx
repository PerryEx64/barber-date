import { useNavigation } from '@react-navigation/native'
import { Button } from '@ui-kitten/components'
import React from 'react'

const FooterComponent = ({ chooseHour }) => {
  const navigation = useNavigation()

  const handleNavigate = () => {
    navigation.navigate('cortes')
  }
  return (
    <>
      {chooseHour && (
        <Button onPress={handleNavigate} size='small' appearance='outline'>
          {'Reservar'}
        </Button>
      )}
    </>
  )
}

export default FooterComponent
