export type MissionState = {
  todos: string[];
  records: { [key: string]: { [key: string]: boolean } };
}

const initialState: MissionState = {
  todos: [],
  records: {},
}

export default initialState
