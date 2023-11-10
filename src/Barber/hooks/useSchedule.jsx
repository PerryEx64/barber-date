import React from 'react'
import { Alert } from 'react-native'
import Toast from 'react-native-root-toast'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../app/features/userSlice'
import {
  CreateSchedule,
  GetSchedule,
  SaveSchedule
} from '../../../services/Member'

const useSchedule = () => {
  const user = useSelector(selectUser)
  const [schedule, setSchedule] = React.useState()
  const [updated, setUpdated] = React.useState(false)
  const [change, setChange] = React.useState(0)

  React.useEffect(() => {
    GetSchedule(user.email, setSchedule)
  }, [updated])

  const onSaveSchedule = () => {
    setChange(2)

    try {
      SaveSchedule(user.email, schedule)

      setChange(0)
      Toast.show('guardado')
    } catch (error) {
      Alert.alert('Ah ocurrido un error', 'Intenta nuevamente')
      setChange(1)
    }
  }

  const onCreateSchedule = () => {
    CreateSchedule(user.email)

    setTimeout(() => {
      setUpdated(!updated)
    }, 1500)
  }

  const onChangeChecked = (checked, index) => {
    const updatedSchedule = [...schedule]
    updatedSchedule[index].status = checked
    setSchedule(updatedSchedule)
    setChange(1)
  }

  return { onSaveSchedule, onCreateSchedule, onChangeChecked, schedule, change }
}

export default useSchedule
