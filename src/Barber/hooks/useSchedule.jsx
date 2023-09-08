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
  const [schedule, setSchedule] = React.useState({})
  const [updated, setUpdated] = React.useState(false)
  const [change, setChange] = React.useState(0)

  React.useEffect(() => {
    GetSchedule(user.email, setSchedule)
  }, [updated])

  const onSaveSchedule = () => {
    //hace que el boton quede desabilitado mientras corre la funcion
    setChange(2)

    try {
      //Guarda la informacion de los horarios
      SaveSchedule(user.email, schedule)

      //hace que el boton no aparezca en pantalla
      setChange(0)
      Toast.show('guardado')
    } catch (error) {
      Alert.alert('Ah ocurrido un error', 'Intenta nuevamente')

      //hace que el boton este disponible para que el usaurio pueda volver a intentar guardar
      setChange(1)
    }
  }

  const onCreateSchedule = () => {
    //Crea horarios por default
    CreateSchedule(user.email)

    setTimeout(() => {
      //cambia su valor para actualizar los horarios
      setUpdated(!updated)
    }, 1500)
  }

  const onChangeChecked = (checked, index) => {
    const updatedSchedule = [...schedule] // Crear una copia del array original
    updatedSchedule[index].status = checked // Cambiar el estado
    setSchedule(updatedSchedule) // Actualizar el estado
    setChange(1) // Hace que el boton este disponible para poder guardar
  }

  return { onSaveSchedule, onCreateSchedule, onChangeChecked, schedule, change }
}

export default useSchedule
