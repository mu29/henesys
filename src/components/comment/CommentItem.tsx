import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Text,
  HtmlView,
} from 'src/components'
import { Comment } from 'src/store/selectors'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 4,
    borderRadius: 8,
    backgroundColor: palette.white.default,
  },
  title: {
    fontSize: 14,
    paddingTop: 4,
    paddingHorizontal: 8,
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
      <HtmlView content={`<font size="1">${comment.content}</font>`} />
    </View>
  </View>
)

export default React.memo(CommentItem)
