import React from 'react'
import {
  StatusBar,
  StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})

const withSafeArea = (Component: React.ComponentType<any>) => (props: any) => (
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={palette.white.default} barStyle="dark-content" />
    <Component {...props} />
  </SafeAreaView>
)

export default withSafeArea