import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { Text } from '@ui-kitten/components'
import { Colors } from '../../../utils/Colors'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setBarberChosen } from '../../../../app/features/barberSlice'
import Avatar from '../../../components/Avatar'

const Barbers = ({ barber, price }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleAvatar = (avatar) => {
    const requires = {
      1: require('../../../../assets/avatars/1.png'),
      2: require('../../../../assets/avatars/2.png'),
      3: require('../../../../assets/avatars/3.png'),
      4: require('../../../../assets/avatars/4.png'),
      5: require('../../../../assets/avatars/5.png')
    }

    return requires[avatar]
  }

  const handleSubmit = () => {
    dispatch(setBarberChosen(barber))
    navigation.navigate('schedule')
  }

  return (
    <View>
      <Avatar avatar={barber.avatar} size={'md'} />
      <View style={[styles.container, {borderColor: Colors['bg-200']}]}>
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
        >{`Tarifa Q${price}.00`}</Text>
        <TouchableOpacity
          style={tailwind`self-end`}
          onPress={() => handleSubmit()}
        >
          <Image
            source={require('../../../../assets/icons/ic_plus.png')}
            style={tailwind`h-8 w-8`}
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
