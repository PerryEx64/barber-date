import { Input } from '@ui-kitten/components'
import React from 'react'

const InputProfile = ({ value, label, isPassword, multiline }) => {
  return (
    <Input
      value={value}
      label={label}
      multiline={multiline}
      disabled={true}
      size='medium'
      secureTextEntry={isPassword}
    />
  )
}

export default InputProfile
