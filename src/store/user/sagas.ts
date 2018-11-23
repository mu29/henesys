import { SagaIterator } from 'redux-saga'
import { call, takeLatest } from 'redux-saga/effects'
import { Services } from 'src/services'
import { bindAsyncAction } from '../common'
import {
  getUserInfoActions,
  GetUserInfoParams,
} from './actions'

const getUserInfoWorker = bindAsyncAction(getUserInfoActions)(
  function*({ name }: GetUserInfoParams, { parser }: Services): SagaIterator {
    const result = yield call(parser.getUserInfo, name)
    return result
  },
)

export default function*(services: Services) {
  yield takeLatest(getUserInfoActions.request, action => getUserInfoWorker(action.payload, services))
}
