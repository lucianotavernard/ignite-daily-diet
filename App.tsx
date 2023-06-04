import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans'

import { App } from './src/App'
import { theme } from './src/styles/theme'

export default function Index() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <App />
    </ThemeProvider>
  )
}
