import { AppState } from '../selectors'

export type ApiResponse = {
  message: string;
}

export type ApiError = {
  message: string;
}

export type EntityState = {
  characters: {
    [key: string]: any;
  };
}

const initialState: EntityState = {
  characters: {},
}

export default initialState

export const getEntity = (state: AppState) => state.entity
