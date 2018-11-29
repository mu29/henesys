import { SagaIterator } from 'redux-saga'
import { call, takeEvery, debounce } from 'redux-saga/effects'
import { Services } from 'src/services'
import { bindAsyncAction } from '../common'
import {
  getCharacterInfoActions,
  searchCharacterInfoActions,
  GetCharacterInfoParams,
  SearchCharacterInfoParams,
} from './actions'

const getCharacterInfoWorker = bindAsyncAction(getCharacterInfoActions)(
  function*({ name }: GetCharacterInfoParams, { parser }: Services): SagaIterator {
    const result = yield call(parser.getCharacterInfo, name)
    return result
  },
)

const searchCharacterInfoWorker = bindAsyncAction(searchCharacterInfoActions)(
  function*({ name }: SearchCharacterInfoParams, { parser }: Services): SagaIterator {
    const result = yield call(parser.getCharacterInfo, name)
    return { imageUrl: result.imageUrl }
  },
)

export default function*(services: Services) {
  yield takeEvery(getCharacterInfoActions.request, action => getCharacterInfoWorker(action.payload, services))
  yield debounce(500, searchCharacterInfoActions.request, action => searchCharacterInfoWorker(action.payload, services))
}
