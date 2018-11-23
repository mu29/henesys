import { Action } from '../common'
import initialState, { LoadingState } from './selectors'

export default (state: LoadingState = initialState, action: Action<any>) => {
  if (!action.type) {
    return state
  }

  switch (true) {
    case action.type.endsWith('_REQUEST'):
      return {
        ...state,
        pendings: [...state.pendings, {
          ...action.payload,
          type: action.type.replace('_REQUEST', ''),
        }],
      }
    case action.type.endsWith('_SUCCESS'):
    case action.type.endsWith('_FAILURE'): {
      const type = action.type.replace('_SUCCESS', '').replace('_FAILURE', '')
      return {
        ...state,
        pendings: state.pendings.filter(p => p.type !== type),
      }
    }
    default:
      return state
  }
}
