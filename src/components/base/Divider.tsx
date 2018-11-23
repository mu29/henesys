import React from 'react'
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  vertical: {
    width: 1,
    height: '100%',
  },
  horizontal: {
    width: '100%',
    height: 1,
  },
  hidden: {
    backgroundColor: 'transparent',
  },
})

export interface DividerProps {
  vertical?: boolean,
  color?: string,
  style?: StyleProp<ViewStyle>
  hidden?: boolean,
}

const Divider: React.SFC<DividerProps> = ({
  vertical,
  color,
  style,
  hidden,
}) => {
  const withColor = { backgroundColor: color }
  return (
    <View
      style={[
        vertical ? styles.vertical : styles.horizontal,
        withColor,
        style,
        hidden && styles.hidden,
      ]}
    />
  )
}

Divider.defaultProps = {
  color: palette.gray[30],
}

export default React.memo(Divider)
