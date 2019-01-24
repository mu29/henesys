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
  category: string,
  id: number,
}

const ArticleViewContainer: React.FunctionComponent<ArticleViewProps> = props => (
  <ArticleView { ...props } />
)

const mapStateToProps = (state: AppState, { board, category, id }: ArticleViewContainerProps) => ({
  article: getArticle(state, board, category, id),
  isLoading: getIsLoading(state.loading, getArticleInfoActions.type),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, { board, category, id }: ArticleViewContainerProps) => ({
  fetchArticle: () => dispatch(getArticleInfoActions.request({ board, category, id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleViewContainer)
