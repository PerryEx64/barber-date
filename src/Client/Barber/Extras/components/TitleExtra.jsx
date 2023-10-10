import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import {
  setExtrasBarbaService,
  setExtrasCejasService
} from '../../../../../app/features/serviceSlice'

const TitleExtra = ({ title, choose, setChoose, type }) => {
  const dispatch = useDispatch()

  const handleChoose = () => {
    const init = {
      id: '',
      name: '',
      price: 0
    }
    setChoose(0)
    if (type == 'barba') {
      dispatch(setExtrasBarbaService(init))
    } else {
      dispatch(setExtrasCejasService(init))
    }
  }
  return (
    <View style={styles.container}>
      <Text category='h5' style={styles.title}>
        {title}
      </Text>
      {choose != 0 ? (
        <TouchableOpacity onPress={handleChoose}>
          <MaterialCommunityIcons
            name='delete-alert-outline'
            size={24}
            color='red'
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  )
}

export default TitleExtra

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 20
  },
  title: {
    marginVertical: 25,
    textAlign: 'center'
  }
})
