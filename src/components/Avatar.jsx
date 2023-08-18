import { Image, StyleSheet } from 'react-native'
import React from 'react'

const Avatar = ({ avatar, size }) => {
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

  return (
    <Image
      source={handleAvatar()}
      style={[
        style.avatar,
        {
          width: size === 'md' ? 85 : 110,
          height: size === 'md' ? 85 : 110
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
