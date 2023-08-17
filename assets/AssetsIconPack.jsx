import { Image, StyleSheet } from 'react-native'
import { Icons } from './icons/Icons'

const createIcon = (source) => {
  return {
    toReactElement: (props) => (
      <Image
        style={styles.icon}
        {...props}
        source={source}
        resizeMode='cover'
      />
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

export const AssetIconPack = {
  name: 'assets',
  icons: {
    ic_profile: createIcon(Icons.ic_profile)
  }
}

