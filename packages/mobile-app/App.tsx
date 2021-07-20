import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation'

const App = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />

        <StatusBar />
      </SafeAreaProvider>
    </NativeBaseProvider>
  )
}

export default App
