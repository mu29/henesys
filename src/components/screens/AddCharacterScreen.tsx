import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import { IconButton } from 'src/components'
import { AddCharacterView } from 'src/containers'
import { withSafeArea } from 'src/wrappers'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white.default,
  },
  close: {
    position: 'absolute',
    top: 8,
    right: 16,
  },
})

const AddCharacterScreen: React.FunctionComponent<NavigationInjectedProps> = ({
  navigation,
}) => (
  <View style={styles.container}>
    <IconButton
      icon="md-close"
      size={25}
      style={styles.close}
      onPress={() => navigation.goBack()}
      round
    />
    <AddCharacterView />
  </View>
)

export default withSafeArea(withNavigation(AddCharacterScreen))
