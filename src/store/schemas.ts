import { schema } from 'normalizr'

export const articleSchema = new schema.Entity('articles')
export const characterSchema = new schema.Entity('characters', {}, { idAttribute: 'name' })
