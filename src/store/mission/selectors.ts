// tslint:disable object-literal-key-quotes
import createCachedSelector from 're-reselect'
import { missions as missionList } from 'src/constants/missions'
import {
  AppState,
  getSelectedCharacterName,
} from '../selectors'

type Record = { [key: string]: boolean }

export type MissionState = {
  todos: string[];
  records: {
    [key: string]: {
      [key: string]: Record;
    };
  };
}

const initialState: MissionState = {
  todos: Object.values(missionList).reduce((r: string[], c) => [...r, ...c.items.map(i => i.key)], []),
  records: {
    '적류': {
      '2018-11-01': {zaqqum: true},
      '2018-11-02': {zaqqum: true},
      '2018-11-03': {zaqqum: true},
      '2018-11-04': {zaqqum: true},
      '2018-11-05': {zaqqum: true},
    },
  },
}

export default initialState

export const getRecordOfDay = (
  state: AppState,
  day: string,
) => state.mission.records[getSelectedCharacterName(state)][day] || {}
export const getRecordsOfPeriod = (
  state: AppState,
  period: number,
) => Object.values(state.mission.records[getSelectedCharacterName(state)]).slice(-period) || []
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

export const getCompleteDays = createCachedSelector(
  getRecordsOfPeriod,
  records => records.reduce(accumulator(1), 0),
)((_, period) => period)

export const getAlmostCompleteDays = createCachedSelector(
  [getRecordsOfPeriod, getCompleteDays],
  (records, completes) => records.reduce(accumulator(0.7), 0) - completes,
)((_, period) => period)

export const getIncompleteDays = createCachedSelector(
  [getRecordsOfPeriod, getCompleteDays, getAlmostCompleteDays],
  (records, completes, almostCompletes) => records.length - (completes + almostCompletes),
)((_, period) => period)

export const getCurrentStreaks = createCachedSelector(
  getRecordsOfPeriod,
  records => {
    let streak = records.length - 1
    while (streak >= 0) {
      if (getProgress(records[streak]) === 1) {
        streak--
      } else {
        break
      }
    }
    return records.length - streak - 1
  },
)((_, period) => period)

export const getLongestStreaks = createCachedSelector(
  getRecordsOfPeriod,
  records => {
    const streaks = records.reduce((result, record) => getProgress(record) === 1 ? ({
      ...result,
      current: result.current + 1,
    }) : ({
      current: 0,
      max: Math.max(result.max, result.current),
    }), {
      current: 0,
      max: 0,
    })
    return Math.max(streaks.current, streaks.max)
  },
)((_, period) => period)
