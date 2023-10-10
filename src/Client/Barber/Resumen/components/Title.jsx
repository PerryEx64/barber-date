import { Text } from '@ui-kitten/components'
import React from 'react'

const Title = ({text}) => {
  return (
    <>
      <Text category='label' style={{ marginTop: 15, fontSize: 17 }}>
        {text}
      </Text>
    </>
  )
}

export default Title
