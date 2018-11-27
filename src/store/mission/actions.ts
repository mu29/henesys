import actionCreatorFactory from '../common'

const actionCreator = actionCreatorFactory('Mission')

export type TodoParams = { name: string }

export const addTodoAction = actionCreator<TodoParams>('ADD_TODO')
export const removeTodoAction = actionCreator<TodoParams>('REMOVE_TODO')
export const toggleTodoAction = actionCreator<TodoParams>('TOGGLE_TODO')

export const fillTodoAction = actionCreator('FILL_TODO')
