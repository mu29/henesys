import moment from 'moment'
import PushNotification from 'react-native-push-notification'
import { SagaIterator } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { bindAsyncAction } from '../common'
import {
  enableUrusNotificationActions,
  disableUrusNotificationActions,
} from './actions'

const enableUrusNotificationWorker = bindAsyncAction(enableUrusNotificationActions)(
  function*(): SagaIterator {
    PushNotification.localNotificationSchedule({
      title: '파왕 우르스',
      message: '오후 8시 ~ 10시에는 메소 보상이 2배!',
      date: moment().startOf('day').add('19.9167', 'hours').toDate(),
      repeatType: 'day',
    })
    return true
  },
)

const disableUrusNotificationWorker = bindAsyncAction(disableUrusNotificationActions)(
  function*(): SagaIterator {
    PushNotification.cancelAllLocalNotifications()
    return true
  },
)

export default function*() {
  yield takeEvery(
    enableUrusNotificationActions.request,
    action => enableUrusNotificationWorker(action.payload),
  )
  yield takeEvery(
    disableUrusNotificationActions.request,
    action => disableUrusNotificationWorker(action.payload),
  )
}
