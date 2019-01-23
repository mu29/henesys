import { Action } from 'redux'
import uniq from 'lodash/uniq'
import { isType } from '../common'
import { getArticleListActions } from './actions'
import initialState, { ArticleState } from './selectors'

export default (state: ArticleState = initialState, action: Action): ArticleState => {
  if (isType(action, getArticleListActions.success)) {
    const { board } = action.payload.params
    return {
      ...state,
      [board]: uniq([
        ...(state[board] || []),
        ...action.payload.result.map(article => article.id),
      ]).sort((a, b) => b - a),
    }
  }

  return state
}
