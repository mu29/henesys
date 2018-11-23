type PendingAction = {
  type: string;
  [key: string]: any;
}

export type LoadingState = {
  pendings: PendingAction[];
}

const initialState: LoadingState = {
  pendings: [],
}

export default initialState

export const getIsLoading = (
  state: LoadingState,
  type: string,
  property?: string,
  value?: any,
) => (
  property
    ? state.pendings.find(p => p.type === type && p[property] === value) !== undefined
    : state.pendings.find(p => p.type === type) !== undefined
)
