import { all, fork } from 'redux-saga/effects'
import { Services } from '../services'
import user from './user/sagas'

const sagas = [user]

export default function*(services: Services) {
  yield all(sagas.map(saga => fork(saga, services)))
}
