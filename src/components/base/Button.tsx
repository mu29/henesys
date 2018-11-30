import React from 'react'
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  ViewStyle,
} from 'react-native'

export interface ButtonProps extends TouchableOpacityProps, TouchableNativeFeedbackProps {
  onPress: () => void,
  round?: boolean,
  style?: StyleProp<ViewStyle>,
  children: React.ReactElement<any>,
}

const Button: React.FunctionComponent<ButtonProps> = ({
  onPress,
  round,
  style,
  children,
  ...props
}) => {
  const wrappedByView = typeof children.type !== 'string' && children.type.displayName === 'View'
  return Platform.OS === 'ios' ? (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={style}
      {...props}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
      onPress={onPress}
      background={round
        ? TouchableNativeFeedback.SelectableBackgroundBorderless()
        : TouchableNativeFeedback.SelectableBackground()
      }
      style={wrappedByView ? style : {}}
      {...props}
    >
      {wrappedByView ? children : (<View style={style}>{children}</View>)}
    </TouchableNativeFeedback>
  )
}

export default React.memo(Button)
