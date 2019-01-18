import { AnyAction } from 'redux'
import { normalize } from 'normalizr'
import mergeWith from 'lodash/mergeWith'
import initialState, { EntityState } from './selectors'

export default (state: EntityState = initialState, action: AnyAction): EntityState => {
  const { payload, meta } = action
  if (action.type && action.type.endsWith('_SUCCESS') && meta && meta.schema && payload) {
    const { entities } = normalize(payload.result, Array.isArray(payload.result) ? [meta.schema] : meta.schema)
    return mergeWith({}, state, entities)
  }

  return state
}
