import React, { PureComponent } from 'react'
import {
  Text as RNText,
  TextProps as RNTextProps,
  Platform,
  StyleProp,
} from 'react-native'

export interface TextProps extends RNTextProps {
  style?: StyleProp<any>,
}

class Text extends PureComponent<TextProps> {
  static defaultStyle = Platform.select({
    ios: {
      fontFamily: 'AppleSDGothicNeo-Regular',
    },
    android: {
      fontFamily: 'sans-serif',
      includeFontPadding: false,
    },
  })

  render() {
    const { style, ...props } = this.props
    return (
      <RNText style={[Text.defaultStyle, style]} {...props} />
    )
  }
}

export default Text
