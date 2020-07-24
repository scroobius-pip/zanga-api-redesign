import { MutationResolvers } from '../../../generated/graphqlgen';
import { AuthenticationError } from 'apollo-server-core';
import { CostType } from '../../../generated/sdk';

const createProperty: MutationResolvers.CreatePropertyResolver = async (_, { input }, ctx) => {

    if (!ctx.userId) {
        throw new AuthenticationError('Token Not Passed')
    }
    const { description, images, location: { city, state }, title, costType, costValue, featured } = input


    const owner = (await ctx.client.user({ id: ctx.userId })).findUserByID
    if (!owner) throw new Error('Failed to get owner')

    const result = await ctx.client.createProperty({
        property: {
            costType: CostType[costType],
            costValue,
            description,
            images,
            city,
            state,
            featured,
            title,
            pointCount: 1,
            owner: {
                connect: ctx.userId
            }
        }
    })

    return result.createProperty.id

}

export default createProperty