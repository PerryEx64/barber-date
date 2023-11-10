import { Image, Dimensions, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const CircleTop = () => {
  const widthScreen = Dimensions.get('window')
  return (
    <View style={tailwind`items-end w-full`}>
      <Image
        source={require('../../../assets/circulo-login.png')}
        style={tailwind`${widthScreen.width > 360 ? 'w-52 h-52' : 'h-36 w-36'}`}
      />
    </View>
  )
}

export default CircleTop
