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
  Article,
} from 'src/store/selectors'

const ArticleListContainer: React.FunctionComponent<ArticleListProps> = props => (
  <ArticleList { ...props } />
)

const mapStateToProps = (state: AppState) => {
  const {
    current: {
      board,
      category,
    },
    bestOnly,
  } = state.menu
  return {
    board,
    category,
    bestOnly,
    articles: getArticleList(state, board, category)
      .filter((article: Article) => bestOnly ? article.voteCount >= 10 : true),
    isLoading: getIsLoading(state.loading, getArticleListActions.type),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  paginate: (
    board: number,
    category: string,
    bestOnly: boolean,
  ) => (
    page: number,
  ) => dispatch(getArticleListActions.request({ board, category, bestOnly, page })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    paginate: dispatchProps.paginate(
      stateProps.board,
      stateProps.category,
      stateProps.bestOnly,
    ),
  }),
)(ArticleListContainer)
