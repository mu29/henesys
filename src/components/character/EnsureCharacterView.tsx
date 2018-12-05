import React from 'react'
import { ActivityIndicator } from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import { palette } from 'src/styles'

export interface EnsureCharacterViewProps extends Partial<NavigationInjectedProps> {
  hasCharacter: boolean,
}

class EnsureCharacterView extends React.PureComponent<EnsureCharacterViewProps> {
  componentWillMount() {
    this._navigate()
  }

  componentDidUpdate() {
    this._navigate()
  }

  _navigate = () => {
    const { hasCharacter, navigation } = this.props
    if (navigation) {
      navigation.navigate(hasCharacter ? 'Main' : 'Create')
    }
  }

  render() {
    return (
      <ActivityIndicator color={palette.primary.default} size="large" />
    )
  }
}

export default withNavigation(EnsureCharacterView)
