import React from 'react'
import { Provider } from 'react-redux'
import { api } from 'src/services/api'
import { parser } from 'src/services/parser'
import configureStore from 'src/store/configure'
import Navigator from 'src/Navigator'

const store = configureStore({}, { api, parser })

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)
