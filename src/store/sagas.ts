import { all, fork } from 'redux-saga/effects'
import { Services } from '../services'
import account from './account/sagas'
import character from './character/sagas'

const sagas = [account, character]

export default function*(services: Services) {
  yield all(sagas.map(saga => fork(saga, services)))
}
