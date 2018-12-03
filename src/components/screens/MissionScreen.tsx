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
    marginRight: -4,
  },
})

class MissionScreen extends React.PureComponent<NavigationInjectedProps> {
  openEditScreen = () => {
    const { navigation } = this.props
    navigation.push('Edit')
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="기록">
          <SwapButton />
          <IconButton
            icon="md-more"
            size={22}
            width={32}
            height={44}
            style={styles.settings}
            onPress={this.openEditScreen}
          />
        </Header>
        <MissionList />
        <CharacterSelectModal />
      </View>
    )
  }
}

export default withSafeArea(withNavigation(MissionScreen))
