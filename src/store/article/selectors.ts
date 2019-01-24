import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import { AppState, getEntity } from 'src/store/selectors'
import { articleSchema } from '../schemas'

export interface Article {
  board: number,
  category: string,
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
  [board: number]: {
    [category: string]: number[];
  };
}

const initialState: ArticleState = {
}

export default initialState

export const getArticleIds = (
  state: AppState,
  board: number,
  category: string,
) => (state.article[board] || {})[category] || []

export const getArticle = createSelector(
  [getEntity, (_: AppState, board: number, category: string, id: number) => `${board}-${category}-${id}`],
  (entities, id) => denormalize(id, articleSchema, entities),
)

export const getArticleList = createSelector(
  [getEntity, getArticleIds, (_: AppState, board: number, category: string) => `${board}-${category}`],
  (entities, ids, boardCategory) => denormalize(ids.map(id => `${boardCategory}-${id}`), [articleSchema], entities),
)
