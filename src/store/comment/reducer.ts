import { Action } from 'redux'
import uniq from 'lodash/uniq'
import { isType } from '../common'
import { getCommentListActions } from './actions'
import initialState, { CommentState } from './selectors'

export default (state: CommentState = initialState, action: Action): CommentState => {
  if (isType(action, getCommentListActions.success)) {
    const { board, article } = action.payload.params
    const boardData = state[board] || {}
    return {
      ...state,
      [board]: {
        ...boardData,
        [article]: uniq([
          ...(boardData[article] || []),
          ...action.payload.result.filter(comment => comment.id !== '0-0').map(comment => comment.id),
        ]).sort((a, b) => b > a ? -1 : 1),
      },
    }
  }

  return state
}
