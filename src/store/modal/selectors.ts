import { AppState } from '../selectors'

export type ModalState = {
  visibleModals: string[];
}

const initialState: ModalState = {
  visibleModals: [],
}

export default initialState

export const isModalVisible = (
  state: AppState,
  name: string,
) => !!state.modal.visibleModals.find(modal => modal === name)
