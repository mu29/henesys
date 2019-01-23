import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import { ArticleView } from 'src/containers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const ArticleScreen: React.FunctionComponent<NavigationInjectedProps> = ({
  navigation,
}) => {
  if (!navigation.state.params) {
    return null
  }

  const id = navigation.state.params.id
  const board = navigation.state.params.board

  return (
    <View style={styles.container}>
      <ArticleView id={id} board={board} />
    </View>
  )
}

export default withNavigation(React.memo(ArticleScreen))
