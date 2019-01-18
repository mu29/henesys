import React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { ArticleList } from 'src/components'
import { ArticleListProps } from 'src/components/article/ArticleList'
import {
  getArticleListActions,
} from 'src/store/actions'
import {
  AppState,
  getIsLoading,
  getArticleList,
} from 'src/store/selectors'

export interface ArticleListContainerProps {
  board: number,
}

const ArticleListContainer: React.FunctionComponent<ArticleListProps> = props => (
  <ArticleList { ...props } />
)

const mapStateToProps = (state: AppState, { board }: ArticleListContainerProps) => ({
  articles: getArticleList(state, board),
  isLoading: getIsLoading(state.loading, getArticleListActions.type),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, { board }: ArticleListContainerProps) => ({
  paginate: (page: number) => dispatch(getArticleListActions.request({ board, page })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer)
