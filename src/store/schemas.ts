import { schema } from 'normalizr'

export const articleSchema = new schema.Entity('articles', {}, {
  idAttribute: article => `${article.board}-${article.category}-${article.id}`,
})
export const commentSchema = new schema.Entity('comments')
export const characterSchema = new schema.Entity('characters', {}, { idAttribute: 'name' })
