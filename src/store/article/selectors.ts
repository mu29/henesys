import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import { AppState, getEntity } from 'src/store/selectors'
import { articleSchema } from '../schemas'

export interface Article {
  id: number,
  title: string,
  author: string,
  href: string,
  content: string,
  viewCount: number,
  voteCount: number,
  commentCount: number,
  createdAt: string,
  comments: any[],
}

export type ArticleState = {
  boards: {
    [board: number]: number[];
  };
}

const initialState: ArticleState = {
  boards: {},
}

export default initialState

export const getArticles = (state: AppState) => getEntity(state).articles

export const getArticleIds = (state: AppState, board: number) => state.article.boards[board]

export const getArticle = createSelector(
  [getEntity, (_: AppState, id: number) => id],
  (entities, id) => denormalize(id, articleSchema, entities),
)

export const getArticleList = createSelector(
  [getEntity, getArticleIds],
  (entities, ids) => denormalize(ids, [articleSchema], entities),
)
