import { Action } from 'redux'
import uniq from 'lodash/uniq'
import { isType } from '../common'
import { getArticleListActions } from './actions'
import initialState, { ArticleState } from './selectors'

export default (state: ArticleState = initialState, action: Action): ArticleState => {
  if (isType(action, getArticleListActions.success)) {
    return {
      ...state,
      boards: {
        ...state.boards,
        [action.payload.params.board]: uniq([
          ...(state.boards[action.payload.params.board] || []),
          ...action.payload.result.map(article => article.id),
        ]),
      },
    }
  }

  return state
}
