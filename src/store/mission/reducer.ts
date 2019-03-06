import { Action } from 'redux'
import intersection from 'lodash/intersection'
import difference from 'lodash/difference'
import { elevateCandidateAction } from 'src/store/actions'
import {
  missionList,
  weeklyMissionList,
  isWeeklyContents,
  isWeeklyBoss,
} from 'src/constants/missions'
import {
  daysInWeek,
  datesBetween,
  today,
  objectify,
} from 'src/utils'
import { isType } from '../common'
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  fillTodoAction,
  changeDateAction,
} from './actions'
import initialState, { MissionState } from './selectors'

export default (state: MissionState = initialState, action: Action): MissionState => {
  if (isType(action, addTodoAction)) {
    const { character, name } = action.payload
    const now = today()
    return {
      ...state,
      todos: {
        ...state.todos,
        [character]: [...state.todos[character], name],
      },
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
      todos: {
        ...state.todos,
        [character]: state.todos[character].filter(todo => todo !== name),
      },
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
    const { character, date, name } = action.payload
    const firstDate = Object.keys(state.records[character])[0]

    return {
      ...state,
      records: {
        ...state.records,
        [character]: {
          ...state.records[character],
          ...(
            isWeeklyBoss(name)
              ? daysInWeek(date, 4)
                .filter(d => d <= today() && d >= firstDate)
                .map(d => ({
                  [d]: {
                    ...(state.records[character][d] || {}),
                    [name]: !!!(state.records[character][d] || {})[name],
                  },
                }))
                .reduce(objectify, {})
              : isWeeklyContents(name)
                ? daysInWeek(date, 1)
                  .filter(d => d <= today() && d >= firstDate)
                  .map(d => ({
                    [d]: {
                      ...(state.records[character][d] || {}),
                      [name]: !!!(state.records[character][d] || {})[name],
                    },
                  }))
                  .reduce(objectify, {})
                : {
                    [date]: {
                      ...state.records[character][date],
                      [name]: !state.records[character][date][name],
                    },
                  }
          ),
        },
      },
    }
  }

  if (isType(action, fillTodoAction)) {
    const characters = Object.keys(state.records)
      .map(character => ({
        name: character,
        firstDay: Object.keys(state.records[character]).sort()[0], 
        lastDay: Object.keys(state.records[character]).sort().slice(-1)[0],
      }))
      .map(info => ({
        ...info,
        lastWeekdaysThursday: info.lastDay
          ? daysInWeek(info.lastDay, 4).filter(date => date <= action.payload.to && date >= info.firstDay)
          : [],
        lastWeekdaysSunday: info.lastDay
          ? daysInWeek(info.lastDay, 1).filter(date => date <= action.payload.to && date >= info.firstDay)
          : [],
        dates: info.lastDay ? datesBetween(info.lastDay, action.payload.to) : [action.payload.to],
      }))

    return {
      ...state,
      todos: characters
        .map(({ name }) => ({
          [name]: state.todos[name].filter(todo => missionList.includes(todo) || weeklyMissionList.includes(todo)),
        }))
        .reduce(objectify, {}),
      records: characters
        .map(character => {
          const freshTodos = state.todos[character.name].reduce((result, todo) => ({ ...result, [todo]: false }), {})
          const lastRecords = state.records[character.name][character.lastDay] || {}

          const intersectionOfThursDayAndSunday = intersection(character.lastWeekdaysThursday, character.lastWeekdaysSunday)
          const thursdayOnly = difference(character.lastWeekdaysThursday, intersectionOfThursDayAndSunday)
          const sundayOnly = difference(character.lastWeekdaysSunday, intersectionOfThursDayAndSunday)

          return {
            [character.name]: {
              ...state.records[character.name],
              ...character.dates
                .map(date => ({ [date]: freshTodos }))
                .reduce(objectify, {}),
              ...intersectionOfThursDayAndSunday
                .map(date => ({
                  [date]: {
                    ...freshTodos,
                    ...(state.records[character.name][date] || {}),
                    ...Object.keys(lastRecords)
                      .filter(isWeeklyBoss)
                      .map(r => ({ [r]: lastRecords[r] }))
                      .reduce(objectify, {}),
                    ...Object.keys(lastRecords)
                      .filter(isWeeklyContents)
                      .map(r => ({ [r]: lastRecords[r] }))
                      .reduce(objectify, {}),
                  },
                }))
                .reduce(objectify, {}),
              ...thursdayOnly
                .map(date => ({
                  [date]: {
                    ...freshTodos,
                    ...(state.records[character.name][date] || {}),
                    ...Object.keys(lastRecords)
                      .filter(isWeeklyBoss)
                      .map(r => ({ [r]: lastRecords[r] }))
                      .reduce(objectify, {}),
                  },
                }))
                .reduce(objectify, {}),
              ...sundayOnly
                .map(date => ({
                  [date]: {
                    ...freshTodos,
                    ...(state.records[character.name][date] || {}),
                    ...Object.keys(lastRecords)
                      .filter(isWeeklyContents)
                      .map(r => ({ [r]: lastRecords[r] }))
                      .reduce(objectify, {}),
                  },
                }))
                .reduce(objectify, {}),
            },
          }
        })
        .reduce(objectify, {}),
    }
  }

  if (isType(action, elevateCandidateAction)) {
    const { name } = action.payload
    const freshTodos = {
      ...missionList.reduce((result, todo) => ({ ...result, [todo]: false }), {}),
      ...weeklyMissionList.reduce((result, todo) => ({ ...result, [todo]: false }), {}),
    }
    return {
      ...state,
      todos: {
        ...state.todos,
        [name]: [...missionList, ...weeklyMissionList],
      },
      records: {
        ...state.records,
        [name]: {
          [today()]: freshTodos,
        },
      },
    }
  }

  if (isType(action, changeDateAction)) {
    return {
      ...state,
      date: action.payload.date,
    }
  }

  return state
}
