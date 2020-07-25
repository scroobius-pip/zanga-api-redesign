import { ApolloServer, gql, AuthenticationError, ForbiddenError } from 'apollo-server-micro'
import jwt from 'jsonwebtoken'
import schema from './schema/schemaString'
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/sdk'
import { Context } from './types/types'
import resolvers from './resolvers'
import getJwtSecret from './functions/getJwtSecret';
import findOrCreateUser from './functions/findOrCreateUser';


export const client = getSdk(new GraphQLClient('https://graphql.fauna.com/graphql', {
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

const getUserFromToken = async (token: string) => {
    try {
        if (token) {
            const { email = '', name = '' } = await jwt.verify(token, getJwtSecret()) as { email?: string, name?: string }
            return { email, name }
        }
        return null
    } catch (error) {
        return null
    }
}

const server = new ApolloServer({
    playground: true,
    // introspection: true,
    // mocks: true,
    resolvers: resolvers as any,
    typeDefs: gqlSchema,
    context: async ({ req }: { req: any }): Promise<Context> => {
        const tokenWithBearer = req.headers.authorization || ''
        const token = tokenWithBearer.split(' ')[1]
        const user = await getUserFromToken(token)
        if (!user) {
            return {
                client,
                userEmail: ''
            }
        }

        return {
            client,
            userEmail: await findOrCreateUser(user.email, user.name)
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

