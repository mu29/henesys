import { SagaIterator } from 'redux-saga'
import { call, takeLatest } from 'redux-saga/effects'
import { Services } from 'src/services'
import { bindAsyncAction } from '../common'
import {
  getArticleInfoActions,
  getArticleListActions,
  GetArticleInfoParams,
  GetArticleListParams,
} from './actions'

const getArticleInfoWorker = bindAsyncAction(getArticleInfoActions)(
  function*({ board, category, id }: GetArticleInfoParams, { parser }: Services): SagaIterator {
    const result = yield call(parser.getArticleInfo, board, category, id)
    return result
  },
)

const getArticleListWorker = bindAsyncAction(getArticleListActions)(
  function*(params: GetArticleListParams, { parser }: Services): SagaIterator {
    const result = yield call(parser.getArticleList, params)
    return result
  },
)

export default function*(services: Services) {
  yield takeLatest(getArticleInfoActions.request, action => getArticleInfoWorker(action.payload, services))
  yield takeLatest(getArticleListActions.request, action => getArticleListWorker(action.payload, services))
}
