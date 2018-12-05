import actionCreatorFactory from '../common'

const actionCreator = actionCreatorFactory('Account')

export const enableUrusNotificationActions = actionCreator.async<undefined, boolean>('ENABLE_URUS_NOTIFICATION')
export const disableUrusNotificationActions = actionCreator.async<undefined, boolean>('DISABLE_URUS_NOTIFICATION')
