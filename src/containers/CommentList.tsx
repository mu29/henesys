import React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { CommentList } from 'src/components'
import { CommentListProps } from 'src/components/comment/CommentList'
import {
  getCommentListActions,
} from 'src/store/actions'
import {
  AppState,
  getIsLoading,
  getCommentList,
} from 'src/store/selectors'

export interface CommentListContainerProps {
  board: number,
  article: number,
}

const CommentListContainer: React.FunctionComponent<CommentListProps> = props => (
  <CommentList { ...props } />
)

const mapStateToProps = (state: AppState, { board, article }: CommentListContainerProps) => ({
  comments: getCommentList(state, board, article),
  isLoading: getIsLoading(state.loading, getCommentListActions.type),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, { board, article }: CommentListContainerProps) => ({
  paginate: (page: number) => dispatch(getCommentListActions.request({ board, article, page })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)
