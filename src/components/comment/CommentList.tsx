import React from 'react'
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native'
import {
  Text,
  CommentItem,
} from 'src/components'
import { Comment } from 'src/store/selectors'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gray[20],
    borderTopWidth: 1,
    borderTopColor: palette.gray[40],
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[40],
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  content: {
    padding: 16,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: palette.gray[40],
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={typography.body[2].black}>
            {count}개의 댓글
          </Text>
        </View>
        <FlatList
          data={comments}
          keyExtractor={this._keyExtractor}
          onEndReached={this._paginate}
          onEndReachedThreshold={10}
          renderItem={this._renderItem}
          ListFooterComponent={this._renderLoading}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={count > 0 && styles.content}
        />
      </View>
    )
  }
}

export default CommentList
