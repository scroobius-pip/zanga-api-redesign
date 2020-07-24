import { ApolloServer, gql, AuthenticationError, ForbiddenError } from 'apollo-server-micro'
import jwt from 'jsonwebtoken'
import schema from './schema/schemaString'
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/sdk'
import { Context } from './types/types'
import resolvers from './resolvers'
import getJwtSecret from './functions/getJwtSecret';


const client = getSdk(new GraphQLClient('https://graphql.fauna.com/graphql', {
    headers: {
        Authorization: 'Bearer ' + process.env.FAUNADB_SECRET
    }
}))

const gqlSchema = gql(schema)

const microCors = require('micro-cors')
const cors = microCors({
    allowHeaders: ['X-Requested-With', 'Access-Control-Allow-Origin',
        'X-HTTP-Method-Override', 'Content-Type',
        'Authorization', 'Accept', 'token']
})

const getIdFromToken = (token: string) => {
    try {
        if (token) {
            const { userId = '' } = jwt.verify(token, getJwtSecret()) as { userId?: string }
            return userId
        }
        return ''
    } catch (error) {
        return ''
    }
}

const server = new ApolloServer({
    playground: true,
    introspection: true,
    // mocks: true,
    resolvers: resolvers as any,
    typeDefs: gqlSchema,
    context: ({ req }: { req: any }): Context => {
        const tokenWithBearer = req.headers.authorization || ''
        const token = tokenWithBearer.split(' ')[1]
        const userId = getIdFromToken(token)
        return {
            client,
            userId
        }
    }
})

// @ts-ignore
export default cors((req, res) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return
    }
    return server.createHandler()(req, res)
})