import type { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { RootStackParamList } from '../types'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: '#2e78b7',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

const NotFoundScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const handlePress = useCallback(() => {
    navigation.replace('Root')
  }, [navigation])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn&apos;t exist.</Text>

      <TouchableOpacity onPress={handlePress} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NotFoundScreen
