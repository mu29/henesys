import actionCreatorFactory from '../common'
import { Menu } from './selectors'

const actionCreator = actionCreatorFactory('Menu')

export type SwitchGroupParams = { group: string }
export type SwitchMenuParams = { menu: Menu }

export const switchGroupAction = actionCreator<SwitchGroupParams>('SWITCH_GROUP')

export const switchMenuAction = actionCreator<SwitchMenuParams>('SWITCH_MENU')

export const toggleBestOnlyAction = actionCreator('TOGGLE_BEST_ONLY')
