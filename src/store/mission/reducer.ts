import { Action } from 'redux'
import { elevateCandidateAction } from 'src/store/actions'
import { datesBetween, today } from 'src/utils'
import { isType } from '../common'
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  fillTodoAction,
} from './actions'
import initialState, { MissionState } from './selectors'

export default (state: MissionState = initialState, action: Action): MissionState => {
  if (isType(action, addTodoAction)) {
    const { character, name } = action.payload
    const now = today()
    return {
      ...state,
      todos: [...state.todos, name],
      records: {
        ...state.records,
        [character]: {
          ...state.records[character],
          [now]: {
            ...state.records[character][now],
            [name]: false,
          },
        },
      },
    }
  }

  if (isType(action, removeTodoAction)) {
    const { character, name } = action.payload
    const now = today()
    const removedRecord = Object.assign({}, state.records[character][now])
    delete removedRecord[name]
    return {
      ...state,
      todos: state.todos.filter(todo => todo !== name),
      records: {
        ...state.records,
        [character]: {
          ...state.records[character],
          [now]: removedRecord,
        },
      },
    }
  }

  if (isType(action, toggleTodoAction)) {
    const { character, name } = action.payload
    const now = today()
    return {
      ...state,
      records: {
        ...state.records,
        [character]: {
          ...state.records[character],
          [now]: {
            ...state.records[character][now],
            [name]: !state.records[character][now][name],
          },
        },
      },
    }
  }

  if (isType(action, fillTodoAction)) {
    const characters = Object.keys(state.records)
      .map(character => ({
        name: character,
        day: Object.keys(state.records[character]).sort().slice(-1)[0],
      }))
      .map(lastDay => ({
        name: lastDay.name,
        dates: datesBetween(lastDay.day, action.payload.to),
      }))
    const freshTodos = state.todos.reduce((result, name) => ({ ...result, [name]: false }), {})
    return {
      ...state,
      records: characters
        .map(character => ({
          [character.name]: {
            ...state.records[character.name],
            ...character.dates.map(date => ({ [date]: freshTodos })).reduce((r, c) => ({ ...r, ...c }), {}),
          },
        }))
        .reduce((r, c) => ({ ...r, ...c }), {}),
    }
  }

  if (isType(action, elevateCandidateAction)) {
    const freshTodos = state.todos.reduce((result, name) => ({ ...result, [name]: false }), {})
    return {
      ...state,
      records: {
        ...state.records,
        [action.payload.name]: {
          [today()]: freshTodos,
        },
      },
    }
  }

  return state
}
