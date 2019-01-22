import React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { ArticleView } from 'src/components'
import { ArticleViewProps } from 'src/components/article/ArticleView'
import {
  getArticleInfoActions,
} from 'src/store/actions'
import {
  AppState,
  getIsLoading,
  getArticle,
} from 'src/store/selectors'

export interface ArticleViewContainerProps {
  board: number,
  id: number,
}

const ArticleViewContainer: React.FunctionComponent<ArticleViewProps> = props => (
  <ArticleView { ...props } />
)

const mapStateToProps = (state: AppState, { board, id }: ArticleViewContainerProps) => ({
  article: getArticle(state, board, id),
  isLoading: getIsLoading(state.loading, getArticleInfoActions.type),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, { board, id }: ArticleViewContainerProps) => ({
  fetchArticle: () => dispatch(getArticleInfoActions.request({ board, id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleViewContainer)
