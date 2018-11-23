import actionCreatorFactory from '../common'
import { ApiError } from '../entity/selectors'

const actionCreator = actionCreatorFactory('User')

export type GetUserInfoParams = { name: string }
export type GetUesrInfoResult = {
  name: string;
  level: number;
  job: string;
  imageUrl: string;
}

export const getUserInfoActions = actionCreator.async<
  GetUserInfoParams,
  GetUesrInfoResult,
  ApiError
>('GET_USER_INFO')
