import { all, fork } from 'redux-saga/effects'
import { Services } from '../services'
import account from './account/sagas'
import article from './article/sagas'
import character from './character/sagas'

const sagas = [account, article, character]

export default function*(services: Services) {
  yield all(sagas.map(saga => fork(saga, services)))
}
