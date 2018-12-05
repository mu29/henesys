import { Action } from 'redux'
import { isType } from '../common'
import {
  enableUrusNotificationActions,
  disableUrusNotificationActions,
} from './actions'
import initialState, { AccountState } from './selectors'

export default (state: AccountState = initialState, action: Action): AccountState => {
  if (isType(action, enableUrusNotificationActions.success)) {
    return {
      ...state,
      urusNotification: true,
    }
  }

  if (isType(action, disableUrusNotificationActions.success)) {
    return {
      ...state,
      urusNotification: false,
    }
  }

  return state
}
