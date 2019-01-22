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

const rootPersistConfig = {
  key: 'henesys',
  storage,
  whitelist: ['account', 'character'],
}

const entityPersistConfig = {
  key: 'entity',
  storage,
  blacklist: ['articles'],
}

const missionPersistConfig = {
  key: 'mission',
  storage,
  blacklist: ['date'],
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
  const rootReducer = combineReducers({
    ...reducers,
    entity: persistReducer(entityPersistConfig, reducers.entity),
    mission: persistReducer(missionPersistConfig, reducers.mission),
  })
  const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
  const store = createStore(persistedReducer, initialState, compose(...enhancers))
  const persistor = persistStore(store)
  sagaMiddleware.run(sagas, services)

  return { store, persistor }
}
