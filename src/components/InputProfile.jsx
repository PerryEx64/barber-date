import { Input } from '@ui-kitten/components'
import React from 'react'

const InputProfile = ({value, label, isPassword}) => {
  return (
    <Input
      value={value}
      label={label}
      disabled={true}
      size='medium'
      secureTextEntry={isPassword}
    />
  )
}

export default InputProfile