import { Action } from 'redux'
import { isType } from '../common'
import {
  switchGroupAction,
  switchMenuAction,
} from './actions'
import initialState, { MenuState } from './selectors'

export default (state: MenuState = initialState, action: Action): MenuState => {
  if (isType(action, switchGroupAction)) {
    return {
      ...state,
      group: action.payload.group,
    }
  }

  if (isType(action, switchMenuAction)) {
    return {
      ...state,
      current: action.payload.menu,
    }
  }

  return state
}
