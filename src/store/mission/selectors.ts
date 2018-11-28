import createCachedSelector from 're-reselect'
import { createSelector } from 'reselect'
import { missions as missionList } from 'src/constants/missions'
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

export const getDailyCompletes = createCachedSelector(getRecordOfDay, getCompletes)((_, day) => day)
export const getDailyProgress = createCachedSelector(getRecordOfDay, getProgress)((_, day) => day)
export const getPeriodCompletes = createCachedSelector(
  getRecordsOfPeriod,
  records => records.reduce((completes, record) => completes + getCompletes(record), 0),
)((_, period) => period)
export const getPeriodProgress = createCachedSelector(
  getRecordsOfPeriod,
  records => records.reduce((progresses, record) => progresses + getProgress(record), 0) / (records.length || 1),
)((_, period) => period)

const accumulator = (percent: number) => (
  days: number,
  record: Record,
) => days + (getProgress(record) >= percent ? 1 : 0)
export const getCompleteDays = createSelector(
  getRecordsOfPeriod,
  records => records.reduce(accumulator(1), 0),
)
export const getAlmostCompleteDays = createSelector(
  [getRecordsOfPeriod, getCompleteDays],
  (records, completes) => records.reduce(accumulator(0.7), 0) - completes,
)
export const getIncompleteDays = createSelector(
  [getRecordsOfPeriod, getCompleteDays, getAlmostCompleteDays],
  (records, completes, almostCompletes) => records.length - (completes + almostCompletes),
)
