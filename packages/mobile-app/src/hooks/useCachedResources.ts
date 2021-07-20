import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (err: unknown) {
        // We might want to provide this error information to an error reporting service
        console.warn(err)
      } finally {
        setLoadingComplete(true)
        await SplashScreen.hideAsync()
      }
    }

    void loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}

export default useCachedResources
