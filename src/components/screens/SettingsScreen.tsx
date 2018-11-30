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
import { withSafeArea } from 'src/wrappers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        onPress={() => navigation.goBack()}
      />
    </Header>
  </View>
)

export default withSafeArea(withNavigation(SettingsScreen))
