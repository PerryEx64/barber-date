import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AppNavigation from './navigation/AppNavigation'
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigation />
        </ApplicationProvider>
      </Provider>
    </NavigationContainer>
  )
}
