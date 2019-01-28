export interface Menu {
  label: string
  board: number
  category: string
}

export type MenuState = {
  group: string;
  current: Menu;
  bestOnly: boolean;
}

const initialState: MenuState = {
  group: '커뮤니티',
  current: {
    label: '메이플 토크',
    board: 2299,
    category: '_리부트',
  },
  bestOnly: false,
}

export default initialState
