import actionCreatorFactory from '../common'

const actionCreator = actionCreatorFactory('Modal')

export type ModalParams = { modal: string }

export const showModalAction = actionCreator<ModalParams>('SHOW_MODAL')
export const hideModalAction = actionCreator<ModalParams>('HIDE_MODAL')
