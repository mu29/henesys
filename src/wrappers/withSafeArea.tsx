import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white.default,
  },
})

const withSafeArea = (Component: React.ComponentType<any>) => (props: any) => (
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={palette.white.default} barStyle="dark-content" />
    <Component {...props} />
  </SafeAreaView>
)

export default withSafeArea
