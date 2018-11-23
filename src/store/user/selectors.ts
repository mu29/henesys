export type UserState = {
  name: string;
  level: number;
  job: string;
  imageUrl: string;
}

const initialState: UserState = {
  name: '적류',
  level: 0,
  job: '',
  imageUrl: '',
}

export default initialState
