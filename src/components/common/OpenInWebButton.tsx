import React from 'react'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import { IconButton } from 'src/components'

class OpenInWebButton extends React.PureComponent<NavigationInjectedProps> {
  _onPress = () => {
    const { navigation } = this.props
    const href = navigation.state.params && navigation.state.params.href || ''

    navigation.push('WebView', { url: `http://m.inven.co.kr${href}` })
  }

  render() {
    return (
      <IconButton
        icon="md-open"
        size={22}
        width={28}
        height={28}
        onPress={this._onPress}
      />
    )
  }
}

export default withNavigation(OpenInWebButton)
