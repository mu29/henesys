import React from 'react'
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import {
  Text,
  Button,
} from 'src/components'
import { withSafeArea } from 'src/wrappers'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: palette.gray[30],
  },
})

const WebViewScreen: React.FunctionComponent<NavigationInjectedProps> = ({
  navigation,
}) => (
  <View style={styles.container}>
    <WebView
      source={{ uri: navigation.state.params && navigation.state.params.url }}
      style={{ marginTop: -1 }}
    />
    <Button onPress={ () => navigation.goBack() }>
      <View style={styles.button}>
        <Text style={typography.body[1].black}>
          닫기
        </Text>
      </View>
    </Button>
  </View>
)

export default withSafeArea(withNavigation(React.memo(WebViewScreen)))
