import { Box } from 'native-base'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

const TabOneScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Tab One</Text>

    <Box>Hello world</Box>

    <View
      darkColor="rgba(255,255,255,0.1)"
      lightColor="#eee"
      style={styles.separator}
    />

    <EditScreenInfo path="/screens/TabOneScreen.tsx" />
  </View>
)

export default TabOneScreen
