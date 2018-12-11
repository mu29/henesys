import React from 'react'
import {
  PushNotificationIOS,
  YellowBox,
} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import moment from 'moment'
// @ts-ignore
import momentLocaleKorea from 'moment/locale/ko'
import PushNotification from 'react-native-push-notification'

import { LoadingView } from 'src/components'
import { api } from 'src/services/api'
import { parser } from 'src/services/parser'
import configureStore from 'src/store/configure'
import { fillTodoAction } from 'src/store/actions'

import { today } from 'src/utils'
import Navigator from 'src/Navigator'

moment.updateLocale('ko', momentLocaleKorea)

YellowBox.ignoreWarnings(['relay:check'])

// @ts-ignore
const { store, persistor } = configureStore({}, { api, parser })

class App extends React.Component {
  componentDidMount() {
    store.dispatch(fillTodoAction({ to: today() }))
    PushNotification.configure({
      onNotification: (notification) => {
        notification.finish(PushNotificationIOS.FetchResult.NoData)
      },
    })
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LoadingView />}>
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
