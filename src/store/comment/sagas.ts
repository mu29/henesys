import { SagaIterator } from 'redux-saga'
import { call, takeLatest } from 'redux-saga/effects'
import { Services } from 'src/services'
import { bindAsyncAction } from '../common'
import {
  getCommentListActions,
  GetCommentListParams,
} from './actions'

const getCommentListWorker = bindAsyncAction(getCommentListActions)(
  function*({ board, article, page }: GetCommentListParams, { parser }: Services): SagaIterator {
    const result = yield call(parser.getCommentList, board, article, page)
    return result
  },
)

export default function*(services: Services) {
  yield takeLatest(getCommentListActions.request, action => getCommentListWorker(action.payload, services))
}
