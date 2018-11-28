import { Action } from 'redux'
import { isType } from '../common'
import { getCharacterInfoActions } from './actions'
import initialState, { CharacterState } from './selectors'

export default (state: CharacterState = initialState, action: Action): CharacterState => {
  if (isType(action, getCharacterInfoActions.success)) {
    return {
      ...state,
      ...action.payload.result,
    }
  }

  return state
}
