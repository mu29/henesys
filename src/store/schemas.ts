import { schema } from 'normalizr'

export const characterSchema = new schema.Entity('characters', {}, { idAttribute: 'name' })
