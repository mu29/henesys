import { AppState } from '../selectors'

export type ApiResponse = {
  message: string;
}

export type ApiError = {
  message: string;
}

export type EntityState = {
  articles: {
    [key: number]: any;
  };
  characters: {
    [key: string]: any;
  };
}

const initialState: EntityState = {
  articles: {},
  characters: {},
}

export default initialState

export const getEntity = (state: AppState) => state.entity || {}
