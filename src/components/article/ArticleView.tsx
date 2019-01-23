import React from 'react'
import moment from 'moment'
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native'
import HTML from 'react-native-render-html'
import { Text } from 'src/components'
import { CommentList } from 'src/containers'
import { withTopDivider } from 'src/wrappers'
import { Article } from 'src/store/selectors'
import { typography, palette } from 'src/styles'

const MAX_WIDTH = Dimensions.get('window').width - 32

const BASE_FONT_STYLE = { fontSize: 16 }

const DividedScrollView = withTopDivider(ScrollView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white.default,
  },
  contentContainer: {
    paddingBottom: 0,
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
    padding: 16,
    overflow: 'hidden',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
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

  _renderLoading = () => (
    <View style={styles.loading}>
      <ActivityIndicator color={palette.primary.default} />
    </View>
  )

  render() {
    const { article } = this.props

    return (
      <DividedScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
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
            {!article.content ? this._renderLoading() : (
              <HTML
                html={article.content}
                imagesMaxWidth={MAX_WIDTH}
                baseFontStyle={BASE_FONT_STYLE}
              />
            )}
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
