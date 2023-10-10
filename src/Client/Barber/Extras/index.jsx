import { useNavigation } from '@react-navigation/native'
import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { EXTRAS } from '../../../utils/ConstanstExtras'
import ImgChoose from './components/ImgChoose'
import TitleExtra from './components/TitleExtra'
import usePrice from '../../../../hooks/usePrice'

const Extras = () => {
  const [chooseCejas, setChooseCejas] = React.useState(0)
  const [chooseBarba, setChooseBarba] = React.useState(0)
  const { calculatePrice } = usePrice()
  const navigation = useNavigation()

  const handleNavigate = () => {
    navigation.navigate('resumen')
  }
  return (
    <Layout level='1' style={styles.container}>
      <Text category='h5' style={styles.title}>
        {'Selecciona tu estilo'}
      </Text>
      <TitleExtra
        title={'Cejas'}
        choose={chooseCejas}
        setChoose={setChooseCejas}
        type={'cejas'}
      />
      <View style={styles.contents}>
        {EXTRAS.cejas.map((item, index) => (
          <ImgChoose
            extra={'cejas'}
            item={item}
            key={index}
            choose={chooseCejas}
            setChoose={setChooseCejas}
          />
        ))}
      </View>
      <TitleExtra
        title={'Barba'}
        choose={chooseBarba}
        setChoose={setChooseBarba}
        type={'barba'}
      />
      <View style={styles.contents}>
        {EXTRAS.barba.map((item, index) => (
          <ImgChoose
            extra={'barba'}
            item={item}
            key={index}
            choose={chooseBarba}
            setChoose={setChooseBarba}
          />
        ))}
      </View>
      <Button
        onPress={handleNavigate}
        style={styles.btn}
        size='small'
        appearance='outline'
      >
        {'Elegir'}
      </Button>
      <Text>{calculatePrice()}</Text>
    </Layout>
  )
}

export default Extras

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5
  },
  title: {
    marginVertical: 25,
    textAlign: 'center'
  },
  contents: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  img: {
    width: 67,
    height: 67,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btn: {
    width: '45%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30
  }
})
