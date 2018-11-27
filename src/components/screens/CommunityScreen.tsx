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

const CommunityScreen: React.SFC<{}> = () => (
  <View style={styles.container}>
    <Header title="커뮤니티" />
  </View>
)

export default withSafeArea(React.memo(CommunityScreen))
