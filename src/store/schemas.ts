import { schema } from 'normalizr'

export const articleSchema = new schema.Entity('articles', {}, {
  idAttribute: article => `${article.board}-${article.id}`,
})
export const characterSchema = new schema.Entity('characters', {}, { idAttribute: 'name' })
