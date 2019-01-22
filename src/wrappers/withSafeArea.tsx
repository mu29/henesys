import React from 'react'
import {
  StatusBar,
  StyleSheet,
} from 'react-native'
import { SafeAreaView, SafeAreaViewProps } from 'react-navigation'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white.default,
  },
})

const withSafeArea = (
  Component: React.ComponentType<any>,
  safeAreaProps: SafeAreaViewProps = {},
) => (
  props: any,
) => (
  <SafeAreaView
    forceInset={{ top: 'always' }}
    style={styles.container}
    {...safeAreaProps}
  >
    <StatusBar backgroundColor={palette.white.default} barStyle="dark-content" />
    <Component {...props} />
  </SafeAreaView>
)

export default withSafeArea
