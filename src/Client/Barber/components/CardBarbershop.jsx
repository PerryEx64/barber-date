import { Text } from '@ui-kitten/components'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import tailwind from 'twrnc'
import { setBarbershopChosen } from '../../../../app/features/barberSlice'

const CardBarbershop = ({ barbershop }) => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity
    onPress={() => dispatch(setBarbershopChosen({
      barbers: barbershop.barbers,
      price: barbershop.price
    }))}
      style={tailwind`flex-row justify-between p-3 items-center shadow bg-[#16196A] rounded-2xl my-1`}
    >
      <View />
      <View>
        <Text
          category='label'
          style={tailwind`text-[16px] text-center text-white`}
        >
          {barbershop.name}
        </Text>
        <Text category='s1' style={tailwind`text-center text-white`}>
          {barbershop.addresse}
        </Text>
      </View>

      <View style={tailwind`bg-[#f3f3f3] rounded-full p-2`}>
        <Image
          source={require('../../../../assets/icons/ic_barber.png')}
          style={tailwind`w-8 h-8`}
        />
      </View>
    </TouchableOpacity>
  )
}

export default CardBarbershop
