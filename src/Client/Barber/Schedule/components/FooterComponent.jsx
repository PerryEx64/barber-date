import { Button } from '@ui-kitten/components'
import React from 'react'

const FooterComponent = ({ chooseHour }) => {
  const onSubmit = () => {
    //
  }
  return (
    <>
      {chooseHour && (
        <Button onPress={onSubmit} size='small' appearance='outline'>
          {'Reservar'}
        </Button>
      )}
    </>
  )
}

export default FooterComponent
