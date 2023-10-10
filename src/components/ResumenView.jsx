import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const ResumenView = ({ title, children }) => {
  return (
    <Layout level='1' style={styles.container}>
      <Text category='h4' style={styles.title}>
        {title}
      </Text>
      <View style={styles.head} />

      <View style={styles.card}>
        <View style={{ justifyContent: 'space-around' }}>{children}</View>
      </View>
      <View style={styles.contentPoint}>
        <View style={[styles.point]} />
        <View style={[styles.point]} />
        <View style={[styles.point]} />
      </View>
    </Layout>
  )
}

export default ResumenView

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    height: '35%',
    width: '100%',
    backgroundColor: '#3366FF',
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,
    position: 'relative'
  },
  card: {
    position: 'absolute',
    height: '55%',
    width: '70%',
    backgroundColor: '#FFFFFF',
    marginTop: 190,
    borderRadius: 15,
    alignSelf: 'center',
    shadowColor: '#000',
    padding: 30,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 2
  },
  point: {
    backgroundColor: '#E1DEE7',
    height: 40,
    width: 40,
    borderRadius: 20
  },
  contentPoint: {
    position: 'absolute',
    marginTop: 190,
    marginLeft: 42,
    height: '50%',
    justifyContent: 'center',
    gap: 18,
    zIndex: 2
  },
  title: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '13%',
    zIndex: 5
  }
})
