import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ErrorCaption = () => {
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.captionText}>{}21`1</Text>
    </View>
  )
}

export default ErrorCaption

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3'
  }
})
