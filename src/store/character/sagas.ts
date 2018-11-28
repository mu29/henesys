import { SagaIterator } from 'redux-saga'
import { call, takeLatest } from 'redux-saga/effects'
import { Services } from 'src/services'
import { bindAsyncAction } from '../common'
import {
  getCharacterInfoActions,
  GetCharacterInfoParams,
} from './actions'

const getCharacterInfoWorker = bindAsyncAction(getCharacterInfoActions)(
  function*({ name }: GetCharacterInfoParams, { parser }: Services): SagaIterator {
    const result = yield call(parser.getCharacterInfo, name)
    return result
  },
)

export default function*(services: Services) {
  yield takeLatest(getCharacterInfoActions.request, action => getCharacterInfoWorker(action.payload, services))
}
