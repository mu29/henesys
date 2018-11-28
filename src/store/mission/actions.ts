import actionCreatorFactory from '../common'

const actionCreator = actionCreatorFactory('Mission')

export type TodoParams = { name: string }
export type FillTodoParams = { to: string }

export const addTodoAction = actionCreator<TodoParams>('ADD_TODO')
export const removeTodoAction = actionCreator<TodoParams>('REMOVE_TODO')
export const toggleTodoAction = actionCreator<TodoParams>('TOGGLE_TODO')

export const fillTodoAction = actionCreator<FillTodoParams>('FILL_TODO')
