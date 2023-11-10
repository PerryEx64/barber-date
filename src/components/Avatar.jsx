import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'

const Avatar = ({ avatar, size }) => {
  const sizeScreen = Dimensions.get('window')
  const handleAvatar = () => {
    const requires = {
      1: require('../../assets/avatars/1.png'),
      2: require('../../assets/avatars/2.png'),
      3: require('../../assets/avatars/3.png'),
      4: require('../../assets/avatars/4.png'),
      5: require('../../assets/avatars/5.png')
    }
    return requires[avatar]
  }

  const handleSize = (sizeIcon) => {
    const sizes = {
      sm: sizeScreen.width > 400 ? 24 : 20,
      md: sizeScreen.width > 400 ? 85 : 75,
      lg: sizeScreen.width > 400 ? 110 : 100
    }

    return sizes[sizeIcon]
  }

  return (
    <Image
      source={handleAvatar()}
      style={[
        style.avatar,
        {
          width: handleSize(size),
          height: handleSize(size)
        }
      ]}
    />
  )
}

export default Avatar

const style = StyleSheet.create({
  avatar: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 2
  }
})
