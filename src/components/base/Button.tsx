import React from 'react'
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native'

export interface ButtonProps extends TouchableOpacityProps, TouchableNativeFeedbackProps {
  onPress: () => void,
  children: React.ReactElement<any>,
}

const Button: React.SFC<ButtonProps> = ({
  onPress,
  children,
  ...props
}) => Platform.OS === 'ios' ? (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress}
    {...props}
  >
    {children}
  </TouchableOpacity>
) : (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.SelectableBackground()}
    {...props}
  >
    {children}
  </TouchableNativeFeedback>
)

export default React.memo(Button)
