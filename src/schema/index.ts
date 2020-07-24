import { importSchema } from 'graphql-import'
import path from 'path'

const schema = importSchema(path.join(__dirname, 'schema.graphql'))

export default schema