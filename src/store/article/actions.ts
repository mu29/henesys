import actionCreatorFactory from '../common'
import { articleSchema } from '../schemas'
import { ApiError } from '../entity/selectors'
import { Article } from './selectors'

const actionCreator = actionCreatorFactory('Article')

export type GetArticleInfoParams = {
  id: number;
}
export type GetArticleInfoResult = Article
export type GetArticleListParams = {
  board: number;
  page: number;
}
export type GetArticleListResult = Article[]

export const getArticleInfoActions = actionCreator.async<
  GetArticleInfoParams,
  GetArticleInfoResult,
  ApiError
>('GET_ARTICLE_INFO', { schema: articleSchema })

export const getArticleListActions = actionCreator.async<
  GetArticleListParams,
  GetArticleListResult,
  ApiError
>('GET_ARTICLE_LIST', { schema: articleSchema })
