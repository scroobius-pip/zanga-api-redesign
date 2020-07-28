import { MutationResolvers } from '../../../generated/graphqlgen';
import { AuthenticationError } from 'apollo-server-core';
import { CostType } from '../../../generated/sdk';
import generateSlug from '../../functions/generateSlug';

const createProperty: MutationResolvers.CreatePropertyResolver = async (_, { input }, ctx) => {

    if (!ctx.userEmail) {
        throw new AuthenticationError('Token Not Passed')
    }
    const { description, images, location: { state, city }, title, costType, costValue, featured } = input



    const result = await ctx.client.createProperty({
        property: {
            expense: 0,
            costType: CostType[costType],
            costValue,
            description,
            images,
            city,
            visits: 0,
            bounty: 0,

            remainingExpense: 0,
            slug: generateSlug(title),
            state,
            featured,
            title,
            // pointCount: 1,
            owner: {
                connect: ctx.userId
            }
        }
    })

    return result.createProperty.id

}

export default createProperty