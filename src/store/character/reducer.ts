import { Action } from 'redux'
import { isType } from '../common'
import {
  searchCharacterInfoActions,
  selectCharacterAction,
  elevateCandidateAction,
  removeCharacterAction,
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

  if (isType(action, elevateCandidateAction)) {
    const candidate = state.candidate.name
    return {
      ...state,
      selected: candidate,
      characters: [...state.characters, candidate],
      candidate: {
        name: '',
        imageUrl: '',
      },
    }
  }

  if (isType(action, removeCharacterAction)) {
    const characters = state.characters.filter(c => c !== action.payload.name)
    return {
      ...state,
      characters,
      selected: characters[0],
    }
  }

  return state
}
