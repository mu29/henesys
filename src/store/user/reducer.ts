import { Action } from 'redux'
import { isType } from '../common'
import { getUserInfoActions } from './actions'
import initialState, { UserState } from './selectors'

export default (state: UserState = initialState, action: Action): UserState => {
  if (isType(action, getUserInfoActions.success)) {
    return {
      ...state,
      ...action.payload.result,
    }
  }

  return state
}
