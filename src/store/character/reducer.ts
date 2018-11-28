import { Action } from 'redux'
import initialState, { CharacterState } from './selectors'

export default (state: CharacterState = initialState, action: Action): CharacterState => {
  return state
}
