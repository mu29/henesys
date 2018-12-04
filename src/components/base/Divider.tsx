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
  },
  horizontal: {
    height: 1,
  },
  hidden: {
    backgroundColor: palette.white.default,
  },
})

export interface DividerProps {
  vertical?: boolean,
  color?: string,
  style?: StyleProp<ViewStyle>
  hidden?: boolean,
}

const Divider: React.FunctionComponent<DividerProps> = ({
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
