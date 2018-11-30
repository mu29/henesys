import actionCreatorFactory from '../common'

const actionCreator = actionCreatorFactory('Mission')

export type TodoParams = { character: string; name: string }
export type ToggleTodoParams = { character: string; date: string; name: string }
export type FillTodoParams = { to: string }
export type ChangeDateParams = { date: string }

export const addTodoAction = actionCreator<TodoParams>('ADD_TODO')
export const removeTodoAction = actionCreator<TodoParams>('REMOVE_TODO')
export const toggleTodoAction = actionCreator<ToggleTodoParams>('TOGGLE_TODO')

export const fillTodoAction = actionCreator<FillTodoParams>('FILL_TODO')

export const changeDateAction = actionCreator<ChangeDateParams>('CHANGE_DATE')
