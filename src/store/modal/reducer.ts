import { Action } from 'redux'
import { isType } from '../common'
import {
  showModalAction,
  hideModalAction,
} from './actions'
import initialState, { ModalState } from './selectors'

export default (state: ModalState = initialState, action: Action): ModalState => {
  if (isType(action, showModalAction)) {
    return {
      ...state,
      visibleModals: [...state.visibleModals, action.payload.modal],
    }
  }

  if (isType(action, hideModalAction)) {
    return {
      ...state,
      visibleModals: state.visibleModals.filter(modal => modal !== action.payload.modal),
    }
  }

  return state
}
