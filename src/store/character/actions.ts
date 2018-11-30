import actionCreatorFactory from '../common'
import { characterSchema } from '../schemas'
import { ApiError } from '../entity/selectors'

const actionCreator = actionCreatorFactory('Character')

export type GetCharacterInfoParams = { name: string }
export type GetCharacterInfoResult = {
  name: string;
  level: number;
  job: string;
  imageUrl: string;
}
export type SearchCharacterInfoParams = { name: string }
export type SearchCharacterInfoResult = { imageUrl: string }
export type SelectCharacterParams = { name: string }
export type ElevateCandidateParams = { name: string }
export type RemoveCharacterParams = { name: string }

export const getCharacterInfoActions = actionCreator.async<
  GetCharacterInfoParams,
  GetCharacterInfoResult,
  ApiError
>('GET_CHARACTER_INFO', { schema: characterSchema })

export const searchCharacterInfoActions = actionCreator.async<
  SearchCharacterInfoParams,
  SearchCharacterInfoResult,
  ApiError
>('SEARCH_CHARACTER_INFO')

export const selectCharacterAction = actionCreator<SelectCharacterParams>('SELECT_CHARACTER')

export const elevateCandidateAction = actionCreator<ElevateCandidateParams>('ELEVATE_CANDIDATE')

export const removeCharacterAction = actionCreator<RemoveCharacterParams>('REMOVE_CHARACTER')
