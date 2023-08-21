import { useNavigation } from '@react-navigation/native'
import { Button, Layout, Radio, Text } from '@ui-kitten/components'
import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setAvatarChosen } from '../../../app/features/accountSlice'
import { DATAAVATAR } from '../../utils/ConstansAvatar'

const SelectAvatar = () => {
  const [choose, setChoose] = React.useState()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const handleAvatar = (avatar) => {
    const requires = {
      1: require('../../../assets/avatars/1.png'),
      2: require('../../../assets/avatars/2.png'),
      3: require('../../../assets/avatars/3.png'),
      4: require('../../../assets/avatars/4.png'),
      5: require('../../../assets/avatars/5.png')
    }

    return requires[avatar]
  }

  return (
    <Layout level='1' style={styles.container}>
      <Text category='h4'>{'Selecciona un Avatar'}</Text>
      <View style={{ height: '40%', marginTop: 20 }}>
        <FlatList
          data={DATAAVATAR}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ gap: 15 }}
          renderItem={({ item, index }) => (
            <View style={styles.content}>
              <Radio
                checked={choose == index ? true : false}
                onChange={() => {
                  setChoose(index)
                  dispatch(setAvatarChosen(index))
                }}
              />
              <Image
                source={handleAvatar(item.key)}
                style={{ width: 60, height: 60 }}
              />
            </View>
          )}
        />
        <Button
          appearance='outline'
          size='small'
          disabled={choose >= 0 ? false : true}
          onPress={() => navigation.goBack()}
        >
          {'Seleccionar'}
        </Button>
      </View>
    </Layout>
  )
}

export default SelectAvatar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
    marginHorizontal: 15
  }
})
