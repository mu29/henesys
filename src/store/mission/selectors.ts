import { missions } from 'src/constants/missions'
import { today } from 'src/utils'

export type MissionState = {
  todos: string[];
  records: { [key: string]: { [key: string]: boolean } };
}

const initialState: MissionState = {
  todos: Object.values(missions).reduce((r: string[], c) => [...r, ...c.items.map(i => i.key)], []),
  records: {},
}

export default initialState

export const getRecordByKey = (state: MissionState, key: string) => state.records[key] || {}

export const getDailyProgress = (state: MissionState) => {
  const record = getRecordByKey(state, today())
  const todos = Math.max(Object.keys(record).length, 1)
  const closed = Object.values(record).filter(v => v === true).length

  return closed / todos
}
