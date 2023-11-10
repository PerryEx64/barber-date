import { useNavigation } from '@react-navigation/native'
import { Text } from '@ui-kitten/components'
import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { useDispatch } from 'react-redux'
import tailwind from 'twrnc'
import { setBarberChosen } from '../../../../app/features/barberSlice'
import { setBarberService } from '../../../../app/features/serviceSlice'
import Avatar from '../../../components/Avatar'
import { Colors } from '../../../utils/Colors'

const Barbers = ({ barber }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const sizeScreen = Dimensions.get('window')
  const priceService = 30

  const handleSubmit = () => {
    dispatch(setBarberChosen(barber))
    dispatch(
      setBarberService({
        price: priceService,
        data: {
          id: barber.id,
          name: barber.name
        }
      })
    )
    navigation.navigate('schedule')
  }

  return (
    <View>
      <Avatar avatar={barber.avatar} size={'md'} />
      <View style={[styles.container, { borderColor: Colors['bg-200'] }]}>
        <View style={tailwind`bg-[${Colors.primary}] rounded-md p-1`}>
          <Text
            category='label'
            style={tailwind`text-[${Colors['text']}] text-center`}
          >
            {barber.name.split(' ')[0]}
          </Text>
        </View>

        <Text
          category='c2'
          style={tailwind`text-center`}
        >{`Tarifa Q${priceService}.00`}</Text>
        <TouchableOpacity
          style={tailwind`self-end`}
          onPress={() => handleSubmit()}
        >
          <Image
            source={require('../../../../assets/icons/ic_plus.png')}
            style={tailwind`${
              sizeScreen.width < 400 ? ' h-8 w-8 ' : 'h-8 w-8'
            }`}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Barbers

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'flex-end',
    gap: 20,
    marginBottom: 8,
    height: 170,
    width: 120,
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: 'red',
    shadowRadius: 5,
    shadowOffset: 1,
    padding: 5,
    marginTop: 50,
    zIndex: 1
  },
  avatar: {
    width: 85,
    height: 85,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 2
  }
})
