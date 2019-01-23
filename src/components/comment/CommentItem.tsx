import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import HTML from 'react-native-render-html'
import {
  Text,
  HtmlView,
} from 'src/components'
import { Comment } from 'src/store/selectors'
import { palette, typography } from 'src/styles'

const MAX_WIDTH = Dimensions.get('window').width - 32

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: palette.white.default,
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

export interface CommentItemProps {
  comment: Comment,
}

const CommentItem: React.FunctionComponent<CommentItemProps> = ({ comment }) => (
  <View style={[styles.container, comment.isReply && styles.reply]}>
    <Text style={[typography.heading[3].black.bold, styles.title]}>
      {comment.author}
    </Text>
    <View style={styles.content}>
      <HTML html={comment.content} imagesMaxWidth={MAX_WIDTH} />
    </View>
  </View>
)

export default React.memo(CommentItem)
