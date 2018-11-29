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
  Icon,
  Button,
} from 'src/components'
import { AddCharacterView } from 'src/containers'
import { withSafeArea } from 'src/wrappers'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  close: {
    position: 'absolute',
    top: 8,
    right: 24,
    zIndex: 1,
  },
  hidden: {
    display: 'none',
  },
})

const AddCharacterScreen: React.SFC<NavigationInjectedProps> = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Button
      hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      onPress={() => navigation.goBack()}
      style={navigation.state.params && navigation.state.params.close ? styles.close : styles.hidden}
    >
      <Icon name="md-close" size={25} color={palette.gray[100]} />
    </Button>
    <AddCharacterView />
  </View>
)

export default withSafeArea(withNavigation(AddCharacterScreen))
