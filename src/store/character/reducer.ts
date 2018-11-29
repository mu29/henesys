import { Action } from 'redux'
import { isType } from '../common'
import { selectCharacterAction } from './actions'
import initialState, { CharacterState } from './selectors'

export default (state: CharacterState = initialState, action: Action): CharacterState => {
  if (isType(action, selectCharacterAction)) {
    return {
      ...state,
      selected: action.payload.name,
    }
  }

  return state
}
