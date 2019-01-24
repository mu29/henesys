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

const ArticleListContainer: React.FunctionComponent<ArticleListProps> = props => (
  <ArticleList { ...props } />
)

const mapStateToProps = (state: AppState) => {
  const { board, category } = state.menu.current
  return {
    board,
    category,
    articles: getArticleList(state, board, category),
    isLoading: getIsLoading(state.loading, getArticleListActions.type),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  paginate: (
    board: number,
    category: string,
  ) => (
    page: number,
  ) => dispatch(getArticleListActions.request({ board, category, page })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    paginate: dispatchProps.paginate(stateProps.board, stateProps.category),
  }),
)(ArticleListContainer)
