import React from 'react'
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native'
import {
  Icon,
  Text,
} from 'src/components'
import { typography, palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: palette.gray[30],
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[30],
  },
  vote: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: 4,
    borderRadius: 20,
    backgroundColor: palette.primary.default,
    paddingTop: Platform.select({
      ios: 1,
      android: 0,
    }),
    paddingLeft: Platform.select({
      ios: 0.5,
      android: 0,
    }),
  },
  text: {
    paddingTop: 2,
  },
})

export interface ArticleReactionsProps {
  voteCount: number,
  commentCount: number,
}

const ArticleReactions: React.FunctionComponent<ArticleReactionsProps> = ({
  voteCount,
  commentCount,
}) => (
  <View style={styles.container}>
    <View style={styles.vote}>
      <View style={styles.icon}>
        <Icon name="md-heart" size={12} color={palette.white.default} />
      </View>
      <Text style={[typography.body[3].gray, styles.text]}>
        {voteCount}
      </Text>
    </View>
    <Text style={[typography.body[3].gray, styles.text]}>
      댓글 {commentCount}개
    </Text>
  </View>
)

export default React.memo(ArticleReactions)
