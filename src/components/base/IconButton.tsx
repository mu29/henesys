import React from 'react'
import {
  View,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export interface IconButtonProps extends Partial<ButtonProps> {
  icon: string,
  size: number,
  width?: number,
  height?: number,
  style?: StyleProp<ViewStyle>,
  onPress: () => void,
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  size,
  width,
  height,
  style,
  onPress,
}) => {
  const withSize = {
    width: width || size,
    height: height || size,
  }
  return (
    <Button
      onPress={onPress}
      round
    >
      <View style={[style, styles.container, withSize]}>
        <Icon name={icon} size={size} color={palette.gray[90]} />
      </View>
    </Button>
  )
}

export default IconButton
