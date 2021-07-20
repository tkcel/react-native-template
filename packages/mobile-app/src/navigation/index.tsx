/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import type { ColorSchemeName } from 'react-native'
import NotFoundScreen from '../screens/NotFoundScreen'
import type { RootStackParamList } from '../types'
import BottomTabNavigator from './BottomTabNavigator'
import LinkingConfiguration from './LinkingConfiguration'

/*
 * A root stack navigator is often used for displaying modals on top of all other content
 * Read more here: https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>()

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen component={BottomTabNavigator} name="Root" />

    <Stack.Screen
      component={NotFoundScreen}
      name="NotFound"
      options={{ title: 'Oops!' }}
    />
  </Stack.Navigator>
)

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
  >
    <RootNavigator />
  </NavigationContainer>
)

export default Navigation
