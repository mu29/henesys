import React from 'react'
import moment from 'moment'
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import {
  Text,
  HtmlView,
} from 'src/components'
import { CommentList } from 'src/containers'
import { withTopDivider } from 'src/wrappers'
import { Article } from 'src/store/selectors'
import { typography, palette } from 'src/styles'

const DividedScrollView = withTopDivider(ScrollView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white.default,
  },
  header: {
    padding: 16,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[30],
  },
  author: {
    marginRight: 8,
  },
  info: {
    marginTop: 4,
    marginHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 8,
    overflow: 'hidden',
  },
})

export interface ArticleViewProps {
  id: number,
  board: number,
  article: Article,
  isLoading: boolean,
  fetchArticle: () => void,
}

class ArticleView extends React.PureComponent<ArticleViewProps> {
  componentWillMount() {
    this.props.fetchArticle()
  }

  render() {
    const { article } = this.props

    return (
      <DividedScrollView style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text
              numberOfLines={2}
              style={typography.heading[1].black.bold}
            >
              {article.title}
            </Text>
            <View style={styles.info}>
              <Text style={[typography.body[3].gray, styles.author]}>
                {article.author}
              </Text>
              <Text style={typography.body[3].lightGray}>
                {moment(article.createdAt).fromNow()} · 추천 {article.voteCount} · 조회 {article.viewCount}
              </Text>
            </View>
          </View>
          <View style={styles.content}>
            {article.content && <HtmlView content={article.content} />}
          </View>
          <CommentList
            board={article.board}
            article={article.id}
            count={article.commentCount}
          />
        </View>
      </DividedScrollView>
    )
  }
}

export default ArticleView
