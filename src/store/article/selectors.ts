import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import { AppState, getEntity } from 'src/store/selectors'
import { articleSchema } from '../schemas'

export interface Article {
  board: number,
  id: number,
  title: string,
  author: string,
  href: string,
  content: string,
  viewCount: number,
  voteCount: number,
  commentCount: number,
  createdAt: string,
}

export type ArticleState = {
  [board: number]: number[];
}

const initialState: ArticleState = {
}

export default initialState

export const getArticleIds = (state: AppState, board: number) => state.article[board] || []

export const getArticle = createSelector(
  [getEntity, (_: AppState, board: number, id: number) => `${board}-${id}`],
  (entities, id) => denormalize(id, articleSchema, entities),
)

export const getArticleList = createSelector(
  [getEntity, getArticleIds, (_: AppState, board: number) => board],
  (entities, ids, board) => denormalize(ids.map(id => `${board}-${id}`), [articleSchema], entities),
)
