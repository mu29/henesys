import React from 'react'
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import {
  Icon,
  Button,
} from 'src/components'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
})

export interface IconButtonProps {
  icon: string,
  size: number,
  hitSlop?: number,
  style?: StyleProp<ViewStyle>,
  onPress: () => void,
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  size,
  hitSlop = 4,
  style,
  onPress,
}) => (
  <Button
    hitSlop={{ top: hitSlop, bottom: hitSlop, left: hitSlop, right: hitSlop }}
    onPress={onPress}
    style={[styles.container, style]}
    round
  >
    <Icon name={icon} size={size} color={palette.gray[90]} />
  </Button>
)

export default IconButton
