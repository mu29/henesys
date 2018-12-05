import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { EnsureCharacterView } from 'src/containers'
import { withSafeArea } from 'src/wrappers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const WelcomeScreen: React.FunctionComponent<{}> = () => (
  <View style={styles.container}>
    <EnsureCharacterView />
  </View>
)

export default withSafeArea(React.memo(WelcomeScreen))
