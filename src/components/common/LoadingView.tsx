import React from 'react'
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const LoadingView: React.FunctionComponent<{}> = () => (
  <View style={styles.container}>
    <ActivityIndicator color={palette.white.default} />
  </View>
)

export default LoadingView
