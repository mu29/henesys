import moment from 'moment'
import { Action } from 'redux'
import { isType } from '../common'
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  fillTodoAction,
} from './actions'
import initialState, { MissionState } from './selectors'
import { datesBetween, today } from 'src/utils'

export default (state: MissionState = initialState, action: Action): MissionState => {
  if (isType(action, addTodoAction)) {
    const now = today()
    return {
      ...state,
      todos: [...state.todos, action.payload.name],
      records: {
        ...state.records,
        [now]: {
          ...state.records[now],
          [action.payload.name]: false,
        },
      },
    }
  }

  if (isType(action, removeTodoAction)) {
    const now = today()
    const removedRecord = Object.assign({}, state.records[now])
    delete removedRecord[action.payload.name]
    return {
      ...state,
      todos: state.todos.filter(todo => todo !== action.payload.name),
      records: {
        ...state.records,
        [now]: removedRecord,
      },
    }
  }

  if (isType(action, toggleTodoAction)) {
    return {
      ...state,
      records: {
        ...state.records,
        [today()]: {
          ...state.records[today()],
          [action.payload.name]: !state.records[today()][action.payload.name],
        },
      },
    }
  }

  if (isType(action, fillTodoAction)) {
    const lastDay = Object.keys(state.records).sort().slice(-1)[0]
    const dates = datesBetween(lastDay, moment())
    const freshTodos = state.todos.reduce((result, name) => ({ ...result, [name]: false }), {})
    return {
      ...state,
      records: {
        ...state.records,
        ...dates.map(date => ({ [date]: freshTodos })).reduce((r, c) => ({ ...r, ...c }), {}),
      },
    }
  }

  return state
}
