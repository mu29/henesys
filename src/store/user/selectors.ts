export type UserState = {
  name: string;
  level: number;
  job: string;
  imageUrl: string;
}

const initialState: UserState = {
  name: '',
  level: 0,
  job: '',
  imageUrl: '',
}

export default initialState
