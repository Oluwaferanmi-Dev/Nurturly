import { type SchemaTypeDefinition } from 'sanity'
import post from '../schemas/post'
import jobListing from '../schemas/jobListing'
import application from '../schemas/application'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, jobListing, application],
}
