import { all, fork } from 'redux-saga/effects'
import { Services } from '../services'
import character from './character/sagas'

const sagas = [character]

export default function*(services: Services) {
  yield all(sagas.map(saga => fork(saga, services)))
}
