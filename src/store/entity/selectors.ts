import { AppState } from '../selectors'

export type ApiResponse = {
  message: string;
}

export type ApiError = {
  message: string;
}

export type EntityState = {
}

const initialState: EntityState = {
}

export default initialState

export const getEntity = (state: AppState) => state.entity
