import { Action } from 'redux'
import { isType } from '../common'
import {
  searchCharacterInfoActions,
  selectCharacterAction,
} from './actions'
import initialState, { CharacterState } from './selectors'

export default (state: CharacterState = initialState, action: Action): CharacterState => {
  if (isType(action, searchCharacterInfoActions.success)) {
    return {
      ...state,
      candidate: {
        name: action.payload.params.name,
        imageUrl: action.payload.result.imageUrl,
      },
    }
  }

  if (isType(action, selectCharacterAction)) {
    return {
      ...state,
      selected: action.payload.name,
    }
  }

  return state
}
