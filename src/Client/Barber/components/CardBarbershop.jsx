import { Text } from '@ui-kitten/components'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import tailwind from 'twrnc'
import { setBarbershops } from '../../../../app/features/barbershopSlice'
import { GetBarbers } from '../../../../services/BarberShop'

const CardBarbershop = ({ barbershop, admin }) => {
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      onPress={() => {
        if (admin == true) {
          dispatch(setBarbershops(barbershop))
        } else {
          GetBarbers(dispatch, barbershop.id)
        }
      }}
      style={tailwind`flex-row justify-between p-3 items-center shadow bg-[#16196A] rounded-2xl my-1`}
    >
      <View />
      <View>
        <Text
          category='label'
          style={[
            tailwind`text-[16px] text-center text-white`,
            { maxWidth: '90%' }
          ]}
        >
          {barbershop.nameBarbershop}
        </Text>
        <Text
          category='s1'
          style={{ maxWidth: '90%', textAlign: 'center', color: 'white' }}
        >
          {barbershop.addreess}
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
