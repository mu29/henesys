import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import {
  Header,
  IconButton,
} from 'src/components'
import {
  MissionList,
  CharacterSelectModal,
  SwapButton,
} from 'src/containers'
import { withSafeArea } from 'src/wrappers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settings: {
    marginLeft: 16,
  },
})

class MissionScreen extends React.Component<NavigationInjectedProps> {
  openSettingsScreen = () => {
    const { navigation } = this.props
    navigation.push('Settings')
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="기록">
          <SwapButton />
          <IconButton
            icon="md-more"
            size={22}
            hitSlop={{ top: 4, bottom: 4, left: 8, right: 8 }}
            onPress={this.openSettingsScreen}
            style={styles.settings}
          />
        </Header>
        <MissionList />
        <CharacterSelectModal />
      </View>
    )
  }
}

export default withSafeArea(withNavigation(MissionScreen))
