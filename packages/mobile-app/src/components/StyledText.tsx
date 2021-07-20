import * as React from 'react'
import type { TextProps } from './Themed'
import { Text } from './Themed'

export const MonoText = ({ style, ...props }: TextProps) => (
  <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />
)
