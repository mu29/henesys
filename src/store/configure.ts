import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger'

import { Services } from '../services'
import { AppState } from './selectors'
import * as reducers from './reducers'
import sagas from './sagas'

const loggerMiddleware = __DEV__ ? createLogger() : () => (fn: any) => fn
export const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'henesys',
  storage,
  whitelist: ['account', 'character', 'entity', 'mission'],
}

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
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, initialState, compose(...enhancers))
  const persistor = persistStore(store)
  sagaMiddleware.run(sagas, services)

  return { store, persistor }
}
