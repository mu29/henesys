import React from 'react'
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { palette } from 'src/styles'

export interface ButtonProps extends TouchableOpacityProps, TouchableNativeFeedbackProps {
  round?: boolean,
  isLoading?: boolean,
  style?: StyleProp<ViewStyle>,
  children: React.ReactElement<any>,
}

const Button: React.FunctionComponent<ButtonProps> = ({
  round,
  isLoading,
  style,
  children,
  ...props
}) => {
  const loadableChildren = isLoading ? <ActivityIndicator color={palette.white.default} /> : children
  const wrappedByView = typeof loadableChildren.type !== 'string' && loadableChildren.type.displayName === 'View'
  return Platform.OS === 'ios' ? (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isLoading}
      style={style}
      {...props}
    >
      {loadableChildren}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
      disabled={isLoading}
      background={round
        ? TouchableNativeFeedback.SelectableBackgroundBorderless()
        : TouchableNativeFeedback.SelectableBackground()
      }
      style={wrappedByView ? style : {}}
      {...props}
    >
      {wrappedByView ? loadableChildren : (<View style={style}>{loadableChildren}</View>)}
    </TouchableNativeFeedback>
  )
}

export default React.memo(Button)
