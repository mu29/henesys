import mergeWith from 'lodash/mergeWith'
import { createSelector } from 'reselect'
import { missions as missionList } from 'src/constants/missions'
import { today } from 'src/utils'
import { AppState } from '../selectors'

type Record = { [key: string]: boolean }

export type MissionState = {
  todos: string[];
  records: { [key: string]: Record };
}

const initialState: MissionState = {
  todos: Object.values(missionList).reduce((r: string[], c) => [...r, ...c.items.map(i => i.key)], []),
  records: {
    '2018-11-01': {},
  },
}

export default initialState

export const getRecordOfDay = (
  state: AppState,
  day: string,
) => state.mission.records[day] || {}
export const getRecordsOfPeriod = (
  state: AppState,
  period: number,
) => Object.values(state.mission.records).slice(-period) || []
export const getCompletes = (record: Record) => Object.values(record).filter(v => v).length
export const getProgress = (record: Record) => {
  const source = Object.values(record)
  return source.filter(v => v).length / (source.length || 1)
}

export const getDailyCompletes = createSelector(getRecordOfDay, getCompletes)
export const getDailyProgress = createSelector(getRecordOfDay, getProgress)
export const getPeriodCompletes = createSelector(
  getRecordsOfPeriod,
  (records) => records.reduce((completes, record) => completes + getCompletes(record), 0),
)
export const getPeriodProgress = createSelector(
  getRecordsOfPeriod,
  (records) => records.reduce((completes, record) => completes + getProgress(record), 0) / records.length,
)
