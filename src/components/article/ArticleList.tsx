import React from 'react'
import {
  FlatList,
  StyleSheet,
  FlatListProps,
} from 'react-native'
import { ArticleItem } from 'src/components'
import { withTopDivider } from 'src/wrappers'
import { Article } from 'src/store/selectors'

const DividedFlatList = withTopDivider<FlatListProps<Article>>(FlatList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export interface ArticleListProps {
  articles: Article[]
}

class MissionList extends React.PureComponent<ArticleListProps> {
  _keyExtractor = (item: Article) => `post-item-${item.id}`

  _renderItem = ({ item }: { item: Article }) => (
    <ArticleItem article={item} />
  )

  render() {
    const { articles } = this.props
    return (
      <DividedFlatList
        data={articles}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    )
  }
}

export default MissionList
