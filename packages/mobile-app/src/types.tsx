/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import type { ParamListBase } from '@react-navigation/native'

export interface RootStackParamList extends ParamListBase {
  Root: undefined
  NotFound: undefined
}

export interface BottomTabParamList extends ParamListBase {
  TabOne: undefined
  TabTwo: undefined
}

export interface TabOneParamList extends ParamListBase {
  TabOneScreen: undefined
}

export interface TabTwoParamList extends ParamListBase {
  TabTwoScreen: undefined
}
