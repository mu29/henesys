import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import { AppState, getEntity } from 'src/store/selectors'
import { articleSchema } from '../schemas'

export interface Menu {
  label: string,
  board: number,
  category: string,
}

export type MenuState = {
  group: string;
  current: Menu;
}

const initialState: MenuState = {
  group: '커뮤니티',
  current: {
    label: '메이플 토크',
    board: 2299,
    category: '_리부트',
  },
}

export default initialState
