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
    return {
      ...state,
      todos: [...state.todos, action.payload.name],
    }
  }

  if (isType(action, removeTodoAction)) {
    return {
      ...state,
      todos: state.todos.filter(todo => todo !== action.payload.name),
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
