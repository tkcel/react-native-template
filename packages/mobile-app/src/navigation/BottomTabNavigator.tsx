/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import type {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
} from '../types'

/*
 * You can explore the built-in icon families and icons on the web at:
 * https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof Ionicons>['name']
  color: string
}) => <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />

/*
 * Each tab has its own navigation stack, you can read more about this pattern here:
 * https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
 */
const TabOneStack = createStackNavigator<TabOneParamList>()

const TabOneNavigator = () => (
  <TabOneStack.Navigator>
    <TabOneStack.Screen
      component={TabOneScreen}
      name="TabOneScreen"
      options={{ headerTitle: 'Tab One Title' }}
    />
  </TabOneStack.Navigator>
)

const TabTwoStack = createStackNavigator<TabTwoParamList>()

const TabTwoNavigator = () => (
  <TabTwoStack.Navigator>
    <TabTwoStack.Screen
      component={TabTwoScreen}
      name="TabTwoScreen"
      options={{ headerTitle: 'Tab Two Title' }}
    />
  </TabTwoStack.Navigator>
)

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        component={TabOneNavigator}
        name="TabOne"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="ios-code" />
          ),
        }}
      />

      <BottomTab.Screen
        component={TabTwoNavigator}
        name="TabTwo"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="ios-code" />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
