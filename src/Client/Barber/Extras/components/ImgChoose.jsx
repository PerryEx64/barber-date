import { Text } from '@ui-kitten/components'
import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useDispatch } from 'react-redux'
import {
  setExtrasBarbaService,
  setExtrasCejasService
} from '../../../../../app/features/serviceSlice'
import { BarbaImg, CejasImg } from '../../../../utils/ConstanstExtras'

const ImgChoose = ({ extra, item, choose, setChoose }) => {
  const dispatch = useDispatch()

  const onChoose = () => {
    setChoose(item.id)
    if (extra == 'cejas') {
      dispatch(
        setExtrasCejasService(item)
      )
    } else {
      dispatch(
        setExtrasBarbaService(item)
      )
    }
  }

  return (
    <TouchableOpacity onPress={onChoose}>
      <ImageBackground
        style={styles.imgBack}
        source={
          item.id == choose
            ? require('../../../../../assets/disabled.png')
            : require('../../../../../assets/enabled.png')
        }
      >
        <Image
          source={extra == 'cejas' ? CejasImg(item.id) : BarbaImg(item.id)}
          style={styles.img}
        />
        <Text
          category='label'
          style={{ marginTop: 3, color: item.id == choose ? 'white' : 'black' }}
        >
          {item.name.toUpperCase()}
        </Text>
        <Text
          category='s2'
          style={{ color: item.id == choose ? 'white' : 'black' }}
        >
          Q{item.price}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default ImgChoose

const styles = StyleSheet.create({
  img: {
    width: 67,
    height: 67,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  imgBack: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
