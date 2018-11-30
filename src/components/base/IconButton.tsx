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
import { ButtonProps } from 'src/components/base/Button'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
})

export interface IconButtonProps extends Partial<ButtonProps> {
  icon: string,
  size: number,
  style?: StyleProp<ViewStyle>,
  onPress: () => void,
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  size,
  hitSlop = { top: 4, bottom: 4, left: 4, right: 4 },
  style,
  onPress,
}) => (
  <Button
    hitSlop={hitSlop}
    onPress={onPress}
    style={[styles.container, style]}
    round
  >
    <Icon name={icon} size={size} color={palette.gray[90]} />
  </Button>
)

export default IconButton
