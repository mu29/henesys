import React from 'react'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
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

export interface ArticleViewContainerProps extends NavigationInjectedProps {}

const ArticleViewContainer: React.FunctionComponent<ArticleViewProps> = props => (
  <ArticleView { ...props } />
)

const mapStateToProps = (state: AppState, { navigation }: ArticleViewContainerProps) => {
  const { params = {} } = navigation.state

  return {
    article: getArticle(state, 14130), // params.id),
    isLoading: getIsLoading(state.loading, getArticleInfoActions.type),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, { navigation }: ArticleViewContainerProps) => {
  const { params = {} } = navigation.state

  return {
    fetchArticle: () => dispatch(getArticleInfoActions.request({
      board: 2304, // params.board,
      id: 14130, // params.id,
    })),
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ArticleViewContainer))
