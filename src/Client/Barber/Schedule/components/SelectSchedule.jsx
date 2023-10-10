import { Radio, Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setScheduleService } from '../../../../../app/features/serviceSlice'

const SelectSchedule = ({ item, index, choose, setChoose, setChooseHour }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.contentList}>
      <Text category='s1'>{item.hour}</Text>
      <Radio
        disabled={!item.status}
        checked={choose == index ? true : false}
        onChange={() => {
          setChoose(index)
          setChooseHour(item.hour)
          dispatch(setScheduleService(item.hour))
        }}
      >
        {item.status == true ? 'disponible' : 'reservada'}
      </Radio>
    </View>
  )
}

export default SelectSchedule

const styles = StyleSheet.create({
  contentList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  }
})
