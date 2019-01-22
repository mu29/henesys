import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Header } from 'src/components'
import { ArticleList } from 'src/containers'
import { withSafeArea } from 'src/wrappers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const CommunityScreen: React.FunctionComponent<{}> = () => (
  <View style={styles.container}>
    <Header title="커뮤니티" />
    <ArticleList board={2299} />
  </View>
)

export default withSafeArea(React.memo(CommunityScreen))
