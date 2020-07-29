import { QueryResolvers } from '../../../generated/graphqlgen';
import { CostType } from '../../../generated/sdk';
import mapDbPropertyToProperty from './mapDbPropertyToProperty';
import { AuthenticationError } from 'apollo-server-core';

const propertiesResolver: QueryResolvers.PostedPropertiesResolver = async (_, { input }, ctx) => {
    if (!ctx.userEmail) {
        throw new AuthenticationError('Token Not Passed')
    }

    const result = (await ctx.client.userProperties({ email: ctx.userEmail, cursor: input?.cursor, size: 25 })).findUserByEmail?.properties

    return {
        properties: (result?.data ?? []).map(mapDbPropertyToProperty),
        pageInfo: {
            after: result?.after ?? '',
            before: result?.before ?? ''
        }
    }
}


export default propertiesResolver
