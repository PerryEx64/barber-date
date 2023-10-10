import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { DATACORTES } from '../../../utils/ConstantsCortes'
import CardCortes from './components/CardCortes'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectPrice } from '../../../../app/features/serviceSlice'

const Cortes = () => {
  const [choose, setChoose] = React.useState('')
  const navigation = useNavigation()
  const price = useSelector(selectPrice)

  const handleNavigate = () => {
    navigation.navigate('extras')
  }

  return (
    <Layout style={styles.container}>
      <Text category='h5' style={styles.title}>
        {'Selecciona tu estilo'}
      </Text>
      <View style>
        <FlatList
          data={DATACORTES}
          horizontal={false}
          numColumns={2}
          style={styles.containerStyle}
          contentContainerStyle={styles.containerList}
          keyExtractor={(item) => item.nombre}
          renderItem={({ item }) => (
            <CardCortes corte={item} setChoose={setChoose} choose={choose} />
          )}
        />
        <Button
          onPress={handleNavigate}
          style={styles.btn}
          size='small'
          appearance='outline'
        >
          {'Elegir'}
        </Button>
        <Text status='warning' category='s1'  style={{textAlign: 'center', marginTop: 10}} >Q{price}.00</Text>
      </View>
    </Layout>
  )
}

export default Cortes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  containerList: {
    gap: 15,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    marginVertical: 25,
    textAlign: 'center'
  },
  containerStyle: {
    width: '80%',
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
