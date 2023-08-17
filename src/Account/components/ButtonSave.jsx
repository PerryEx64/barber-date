import { Button, Spinner } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import tailwind from 'twrnc'

const ButtonSave = ({title, loading, handleSubmit, onSubmit}) => {
  return (
    <>
      {loading == true ? (
        <View style={tailwind`self-center mt-5`}>
          <Spinner status='warning' />
        </View>
      ) : (
        <Button
          disabled={loading}
          onPress={handleSubmit(onSubmit)}
          style={tailwind`mt-4`}
        >
          {title}
        </Button>
      )}
    </>
  )
}

export default ButtonSave
