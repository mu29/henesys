import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  GestureResponderEvent,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import HTML from 'react-native-render-html'
import { Text } from 'src/components'
import { Comment } from 'src/store/selectors'
import { palette, typography } from 'src/styles'

const MAX_WIDTH = Dimensions.get('window').width - 56

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 12,
    paddingTop: 10,
    borderRadius: 8,
    backgroundColor: palette.gray[20],
  },
  title: {
    fontSize: 14,
  },
  content: {
    flex: 1,
    overflow: 'hidden',
  },
  reply: {
    marginLeft: 32,
  },
})

export interface CommentItemProps extends Partial<NavigationInjectedProps> {
  comment: Comment,
}

class CommentItem extends React.PureComponent<CommentItemProps> {
  _openLink = (_: GestureResponderEvent, url: string) => {
    const { navigation } = this.props
    if (navigation) {
      navigation.push('WebView', { url })
    }
  }

  render() {
    const { comment } = this.props

    return (
      <View style={[styles.container, comment.isReply && styles.reply]}>
        <Text style={[typography.heading[3].black.bold, styles.title]}>
          {comment.author}
        </Text>
        <View style={styles.content}>
          <HTML
            html={comment.content}
            imagesMaxWidth={MAX_WIDTH - (comment.isReply ? 32 : 0)}
            onLinkPress={this._openLink}
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(CommentItem)
