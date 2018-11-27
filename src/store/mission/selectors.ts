import mergeWith from 'lodash/mergeWith'
import { missions } from 'src/constants/missions'
import { today } from 'src/utils'

export type MissionState = {
  todos: string[];
  records: { [key: string]: { [key: string]: boolean } };
}

const initialState: MissionState = {
  todos: Object.values(missions).reduce((r: string[], c) => [...r, ...c.items.map(i => i.key)], []),
  records: {
    '2018-11-01': {},
  },
}

export default initialState

const merger = (
  obj: boolean | boolean[],
  src: boolean | boolean[],
) => (Array.isArray(obj) ? obj.concat(src) : [obj, src]).filter(v => v !== undefined)

export const getRecordByDay = (state: MissionState, day: string) => state.records[day] || {}

export const getDailyProgress = (state: MissionState, day: string) => {
  const record = getRecordByDay(state, day)
  const source = Object.values(record)
  const todos = Math.max(source.length, 1)
  const closed = source.filter(v => v === true).length

  return closed / todos
}

export const getTodayProgress = (state: MissionState) => getDailyProgress(state, today())

export const getTotalMissions = (state: MissionState, days: number) => {
  const record = mergeWith({}, ...Object.values(state.records).slice(-days), merger)
  const source = Object.values<boolean[]>(record).reduce((r, c) => [...r, ...c], [])

  return source
}

export const getTotalClosed = (state: MissionState, days: number) => {
  const source = getTotalMissions(state, days)
  const closed = source.filter(v => v === true)

  return closed
}

export const getMonthlyClosed = (state: MissionState) => getTotalClosed(state, 30).length

export const getMonthlyProgress = (state: MissionState) => {
  const total = getTotalMissions(state, 30).length
  const closed = getTotalClosed(state, 30).length

  return closed / total
}
