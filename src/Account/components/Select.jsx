import { Layout, SelectItem, Select as SelectUi } from '@ui-kitten/components'
import React from 'react'
import { DATAAVATAR } from '../../utils/ConstansAvatar'
import { Image } from 'react-native'
import tailwind from 'twrnc'

const Select = () => {
  const [selectedIndex, setSelectedIndex] = React.useState()

  const handleAvatar = (avatar) => {
    console.log(avatar)
    const requires = {
      1: require('../../../assets/avatars/1.png'),
      2: require('../../../assets/avatars/2.png'),
      3: require('../../../assets/avatars/3.png'),
      4: require('../../../assets/avatars/4.png'),
      5: require('../../../assets/avatars/5.png')
    }

    return requires[avatar]
  }

  const LeftIcon = (avatar) => (
    <Image source={handleAvatar(avatar)} style={{width: 8, height: 8}} />
  )

  return (
    <Layout>
      <SelectUi
        label='Label'
        placeholder={'Selecciona una opcion'}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {DATAAVATAR.map((item, i) => (
          <SelectItem key={i} title={`Avatar ${item.key}`} accessoryLeft={LeftIcon(item.key)} />
        ))}
      </SelectUi>
    </Layout>
  )
}

export default Select
