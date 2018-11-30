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
import { SettingsView } from 'src/containers'
import { withSafeArea } from 'src/wrappers'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: palette.primary.default,
  },
})

const SettingsScreen: React.FunctionComponent<NavigationInjectedProps> = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Header title="편집">
      <IconButton
        icon="md-close"
        size={25}
        width={32}
        height={44}
        onPress={() => navigation.goBack()}
      />
    </Header>
    <SettingsView />
  </View>
)

export default withSafeArea(withNavigation(SettingsScreen))
