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
    right: 8,
  },
  hidden: {
    display: 'none',
  },
})

const AddCharacterScreen: React.FunctionComponent<NavigationInjectedProps> = ({
  navigation,
}) => {
  const close = navigation.state.params && navigation.state.params.close
  return (
    <View style={styles.container}>
      <IconButton
        icon="md-close"
        size={25}
        width={32}
        height={44}
        onPress={() => close && navigation.goBack()}
        style={close ? styles.close : styles.hidden}
        round
      />
      <AddCharacterView afterConfirm={close ? () => {} : () => navigation.navigate('Welcome')} />
    </View>
  )
}

export default withSafeArea(withNavigation(AddCharacterScreen))
