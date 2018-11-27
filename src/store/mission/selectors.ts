import { missions } from 'src/constants/missions'

export type MissionState = {
  todos: string[];
  records: { [key: string]: { [key: string]: boolean } };
}

const initialState: MissionState = {
  todos: Object.values(missions).reduce((r: string[], c) => [...r, ...c.items.map(i => i.key)], []),
  records: {},
}

export default initialState
