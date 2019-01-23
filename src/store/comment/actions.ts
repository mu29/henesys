import actionCreatorFactory from '../common'
import { commentSchema } from '../schemas'
import { ApiError } from '../entity/selectors'
import { Comment } from './selectors'

const actionCreator = actionCreatorFactory('Comment')

export type GetCommentListParams = {
  board: number;
  article: number;
  page: number;
}
export type GetCommentListResult = Comment[]

export const getCommentListActions = actionCreator.async<
  GetCommentListParams,
  GetCommentListResult,
  ApiError
>('GET_COMMENT_LIST', { schema: commentSchema })
