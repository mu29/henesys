import actionCreatorFactory from '../common'
import { characterSchema } from '../schemas'
import { ApiError } from '../entity/selectors'

const actionCreator = actionCreatorFactory('Character')

export type GetCharacterInfoParams = { name: string }
export type GetUesrInfoResult = {
  name: string;
  level: number;
  job: string;
  imageUrl: string;
}
export type SelectCharacterParams = { name: string }

export const getCharacterInfoActions = actionCreator.async<
  GetCharacterInfoParams,
  GetUesrInfoResult,
  ApiError
>('GET_CHARACTER_INFO', { schema: characterSchema })

export const selectCharacterAction = actionCreator<SelectCharacterParams>('SELECT_CHARACTER')
