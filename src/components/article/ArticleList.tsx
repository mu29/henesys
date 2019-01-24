import React from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  FlatListProps,
} from 'react-native'
import { ArticleItem } from 'src/components'
import { withTopDivider } from 'src/wrappers'
import { Article } from 'src/store/selectors'
import { palette } from 'src/styles'

const DividedFlatList = withTopDivider<FlatListProps<Article>>(FlatList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
})

export interface ArticleListProps {
  board: number,
  category: string,
  articles: Article[],
  isLoading: boolean,
  paginate: (page: number) => void,
}

export interface ArticleListState {
  board: number,
  page: number,
  isRefreshing: boolean,
}

class ArticleList extends React.PureComponent<ArticleListProps, ArticleListState> {
  state = {
    board: this.props.board,
    page: 0,
    isRefreshing: false,
  }

  static getDerivedStateFromProps(props: ArticleListProps, state: ArticleListState) {
    if (props.board !== state.board) {
      return {
        board: props.board,
        page: 0,
      }
    }

    return null
  }

  componentDidMount() {
    this._paginate()
  }

  componentDidUpdate() {
    if (this.state.page === 0) {
      this._paginate()
    }
  }

  _paginate = () => !this.props.isLoading && this.setState(
    ({ page }) => ({ page: page + 1 }),
    () => {
      const { paginate } = this.props
      const { page } = this.state
      paginate(page)
      this.setState({ isRefreshing: false })
    },
  )

  _onRefresh = () => this.setState({
    page: 0,
    isRefreshing: true,
  }, () => {
    this._paginate()
  })

  _keyExtractor = (item: Article) => `article-item-${item.id}`

  _renderLoading = () => this.props.isLoading ? (
    <View style={styles.loading}>
      <ActivityIndicator color={palette.primary.default} />
    </View>
  ) : null

  _renderItem = ({ item }: { item: Article }) => (
    <ArticleItem article={item} />
  )

  render() {
    const { articles, isLoading } = this.props
    const { isRefreshing } = this.state

    return (
      <DividedFlatList
        data={articles}
        keyExtractor={this._keyExtractor}
        onEndReached={this._paginate}
        renderItem={this._renderItem}
        ListFooterComponent={this._renderLoading}
        refreshControl={
          <RefreshControl
            colors={[palette.primary.light]}
            tintColor={palette.primary.light}
            refreshing={isRefreshing && isLoading}
            onRefresh={this._onRefresh}
          />
        }
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    )
  }
}

export default ArticleList
