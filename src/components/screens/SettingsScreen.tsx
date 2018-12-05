import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {
  Header,
  SettingsList,
} from 'src/components'
import { withSafeArea } from 'src/wrappers'
import { palette } from 'src/styles'

const DEVICE_HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    height: DEVICE_HEIGHT / 2,
    backgroundColor: palette.gray[10],
  },
})

const SettingsScreen: React.FunctionComponent<{}> = () => (
  <View style={styles.container}>
    <Header title="설정" />
    <SettingsList />
    <View style={styles.background} />
  </View>
)

export default withSafeArea(React.memo(SettingsScreen))
