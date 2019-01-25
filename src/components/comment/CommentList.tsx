import React from 'react'
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native'
import { CommentItem } from 'src/components'
import { Comment } from 'src/store/selectors'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
})

export interface CommentListProps {
  board: number,
  article: number,
  count: number,
  isLoading: boolean,
  comments: Comment[],
  paginate: (page: number) => void,
}

export interface CommentListState {
  page: number,
}

class CommentList extends React.PureComponent<CommentListProps, CommentListState> {
  state = {
    page: 0,
  }

  componentWillMount() {
    this._paginate()
  }

  _paginate = () => !this.props.isLoading && this.setState(
    ({ page }) => ({ page: page + 1 }),
    () => {
      const { paginate } = this.props
      const { page } = this.state
      paginate(page)
    },
  )

  _keyExtractor = (item: Comment) => `comment-item-${item.id}`

  _renderLoading = () => this.props.isLoading ? (
    <View style={styles.loading}>
      <ActivityIndicator color={palette.primary.default} />
    </View>
  ) : null

  _renderItem = ({ item }: { item: Comment }) => (
    <CommentItem comment={item} />
  )

  render() {
    const { comments, count } = this.props

    return (
      <FlatList
        data={comments}
        keyExtractor={this._keyExtractor}
        onEndReached={this._paginate}
        onEndReachedThreshold={10}
        renderItem={this._renderItem}
        ListFooterComponent={this._renderLoading}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={count > 0 && styles.container}
      />
    )
  }
}

export default CommentList
