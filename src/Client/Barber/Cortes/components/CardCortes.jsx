import { AntDesign } from '@expo/vector-icons'
import { Text } from '@ui-kitten/components'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setCorteService } from '../../../../../app/features/serviceSlice'

const CardCortes = ({ corte, setChoose, choose }) => {
  const dispatch = useDispatch()

  const handleCorte = () => {
    const requires = {
      1: require('../../../../../assets/cortes/militar.png'),
      2: require('../../../../../assets/cortes/quiff.png'),
      3: require('../../../../../assets/cortes/clasico.png'),
      4: require('../../../../../assets/cortes/pompadour.png')
    }
    return requires[corte.img]
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setChoose(corte.id)
        dispatch(
          setCorteService({
            id: corte.id,
            name: corte.nombre
          })
        )
      }}
    >
      <View style={styles.imgBack}>
        {corte.id == choose ? (
          <AntDesign
            name='checkcircleo'
            size={24}
            color='green'
            style={{ alignSelf: 'flex-end' }}
          />
        ) : (
          <></>
        )}
        <Image source={handleCorte()} style={styles.img} />
        <Text
          category='label'
          style={[
            styles.title,
            { color: corte.id == choose ? 'white' : 'black' }
          ]}
        >
          {corte.nombre.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CardCortes

const styles = StyleSheet.create({
  img: {
    width: 67,
    height: 67,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    textAlign: 'center',
    marginTop: 5
  },
  container: {
    marginHorizontal: 15
  },
  imgBack: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
