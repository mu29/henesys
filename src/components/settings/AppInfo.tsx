import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Text } from 'src/components'
import { palette, typography } from 'src/styles'

const DEVICE_HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    height: DEVICE_HEIGHT / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.gray[10],
  },
})

const AppInfo: React.FunctionComponent<{}> = () => (
  <View style={styles.container}>
    <Text style={typography.body[3].lightGray}>
      ver 1.0.0
    </Text>
  </View>
)

export default AppInfo
