import { QueryResolvers } from '../../../generated/graphqlgen';
import { mapDbPropertyToProperty } from './mapDbPropertyToProperty';
import { AuthenticationError } from 'apollo-server-core';

const propertiesResolver: QueryResolvers.SharedPropertiesResolver = async (_, { input }, ctx) => {
    if (!ctx.userId) {
        throw new AuthenticationError('Token Not Passed')
    }

    const result = (await ctx.client.findUserPropertyPoints({ userId: ctx.userId, size: 25, cursor: input?.cursor })).findPropertyPointsByUserId

    return {
        pageInfo: {
            after: result?.after ?? '',
            before: result?.before ?? ''
        },
        points: (result ?? [])?.data.map((d) => {
            return {
                impressions: d?.impressions ?? 0,
                profit: d?.profit ?? 0,
                propertySlug: d?.property.slug ?? '',
                propertyTitle: d?.property.title ?? ''
            }
        })
    }

}



export default propertiesResolver