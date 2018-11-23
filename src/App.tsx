import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import moment from 'moment'
// @ts-ignore
import momentLocaleKorea from 'moment/locale/ko'
import { api } from 'src/services/api'
import { parser } from 'src/services/parser'
import configureStore from 'src/store/configure'
import Navigator from 'src/Navigator'

moment.updateLocale('ko', momentLocaleKorea)

YellowBox.ignoreWarnings(['relay:check'])

// @ts-ignore
const store = configureStore({}, { api, parser })

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)
