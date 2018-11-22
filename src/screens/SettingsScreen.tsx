import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Header,
} from 'src/components'
import { withSafeArea } from 'src/wrappers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const SettingsScreen: React.SFC<{}> = () => (
  <View style={styles.container}>
    <Header title="설정" />
  </View>
)

export default withSafeArea(React.memo(SettingsScreen))
