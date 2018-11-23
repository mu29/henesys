import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import { Services } from '../services'
import { AppState } from './selectors'
import * as reducers from './reducers'
import sagas from './sagas'

const loggerMiddleware = __DEV__ ? createLogger() : () => (fn: any) => fn
export const sagaMiddleware = createSagaMiddleware()

export default function configureStore(
  initialState: AppState,
  services: Services,
) {
  const enhancers = [
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware,
    ),
  ]
  const rootReducer = combineReducers(reducers)
  const store = createStore(rootReducer, initialState, compose(...enhancers))
  sagaMiddleware.run(sagas, services)

  return store
}
