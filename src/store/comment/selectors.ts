import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import { AppState, getEntity } from 'src/store/selectors'
import { commentSchema } from '../schemas'

export interface Comment {
  id: string,
  author: string,
  content: string,
  voteCount: number,
  createdAt: string,
  best: boolean,
  isReply: boolean,
}

export type CommentState = {
  [board: number]: {
    [article: number]: string[];
  };
}

const initialState: CommentState = {
}

export default initialState

export const getCommentIds = (
  state: AppState,
  board: number,
  article: number,
) => (state.comment[board] || {})[article] || []

export const getCommentList = createSelector(
  [getEntity, getCommentIds],
  (entities, ids) => denormalize(ids, [commentSchema], entities),
)
