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
import { withSafeArea } from 'src/wrappers'

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

  const {
    board,
    category,
    id,
  } = navigation.state.params

  return (
    <View style={styles.container}>
      <ArticleView board={board} category={category} id={id} />
    </View>
  )
}

export default withSafeArea(withNavigation(React.memo(ArticleScreen)), { forceInset: { top: 'never' } })
