import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Header,
  withSafeArea,
} from 'src/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const ProfileScreen: React.SFC<{}> = () => (
  <View style={styles.container}>
    <Header title="프로필" />
  </View>
)

export default withSafeArea(React.memo(ProfileScreen))
