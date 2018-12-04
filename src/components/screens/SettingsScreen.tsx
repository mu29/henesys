import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Header,
  SettingsList,
  AppInfo,
} from 'src/components'
import { withSafeArea } from 'src/wrappers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const SettingsScreen: React.FunctionComponent<{}> = () => (
  <View style={styles.container}>
    <Header title="설정" />
    <SettingsList />
    <AppInfo />
  </View>
)

export default withSafeArea(React.memo(SettingsScreen))
