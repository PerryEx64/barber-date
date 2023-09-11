import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider } from '@ui-kitten/components'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AppNavigation from './navigation/AppNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <RootSiblingParent>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Provider store={store}>
            <AppNavigation />
          </Provider>
        </ApplicationProvider>
      </RootSiblingParent>
    </NavigationContainer>
  )
}
