import { Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../utils/Colors'
import tailwind from 'twrnc'

const ListHeader = ({ name }) => {
  return (
    <View style={tailwind`bg-[${Colors.primary}] rounded-md p-1 mt-8`}>
      <Text
        category='label'
        style={tailwind`text-[${Colors['text']}] text-center`}
      >
        {name.split(' ')[0]}
      </Text>
    </View>
  )
}

export default ListHeader
