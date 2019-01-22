import React from 'react'
import moment from 'moment'
import {
  View,
  StyleSheet,
  WebView,
  ScrollView,
  NativeSyntheticEvent,
  WebViewMessageEventData,
} from 'react-native'
import {
  Text,
  Button,
} from 'src/components'
import { withTopDivider } from 'src/wrappers'
import { Article } from 'src/store/selectors'
import { typography, palette } from 'src/styles'

const DividedScrollView = withTopDivider(ScrollView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white.default,
  },
  contentContainer: {
    paddingBottom: 16,
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
    padding: 8,
  },
})

const SCRIPT_AND_STYLE = `
<script>
function waitForBridge() {
  if (window.postMessage.length !== 1){
    setTimeout(waitForBridge, 200);
  } else {
    window.postMessage(document.body.scrollHeight);
  }
}
window.onload = waitForBridge;
</script>
<style>
body {
  font-family: 'Apple SD Gothic Neo', 'Noto Sans CJK';
  background-color: '#FFFFFF',
}
img {
  width: 100%;
  margin-bottom: 16px;
}
div {
  font-size: 16px;
  line-height: 1.2;
}
font[size = "1"] {
  font-size: 24px;
  line-height: 1.2;
}
font[size = "2"] {
  font-size: 28px;
  line-height: 1.2;
}
font[size = "3"] {
  font-size: 32px;
  line-height: 1.2;
}
font[size = "4"] {
  font-size: 36px;
  line-height: 1.2;
}
font[size = "5"] {
  font-size: 40px;
  line-height: 1.2;
}
font[size = "6"] {
  font-size: 44px;
  line-height: 1.2;
}
br {
  line-height: 1.2;
}
</style>
`

export interface ArticleViewProps {
  id: number,
  board: number,
  article: Article,
  isLoading: boolean,
  fetchArticle: () => void,
}

export interface ArticleViewState {
  contentHeight: number,
}

class ArticleView extends React.PureComponent<ArticleViewProps> {
  state = {
    contentHeight: 0,
  }

  componentWillMount() {
    this.props.fetchArticle()
  }

  _getArticleContent = () => ({
    html: `
      <html>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${SCRIPT_AND_STYLE}
        <body>
          ${this.props.article.content || ''}
        </body>
      </html>
    `,
  })

  _onMessage = (event: NativeSyntheticEvent<WebViewMessageEventData>) => this.setState({
    contentHeight: Number(event.nativeEvent.data),
  })

  render() {
    const { article } = this.props
    const { contentHeight } = this.state

    if (!article) {
      return null
    }

    return (
      <DividedScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
          <WebView
            source={this._getArticleContent()}
            onMessage={this._onMessage}
            style={{ height: contentHeight, padding: 12 }}
            scrollEnabled={false}
            javaScriptEnabled
            domStorageEnabled
          />
        </View>
      </DividedScrollView>
    )
  }
}

export default ArticleView
