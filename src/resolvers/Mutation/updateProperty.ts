import { MutationResolvers } from '../../../generated/graphqlgen';
import { CostType } from '../../../generated/sdk';

const resolver: MutationResolvers.UpdatePropertyResolver = async (_, { input: { propertySlug, location, ...input } }, ctx) => {
    if (!ctx.userId) {
        return false
    }

    const { findPropertyBySlug: { owner, dbId } } = await ctx.client.property({ slug: propertySlug })

    if (owner.dbId !== ctx.userId) {
        return false
    }

    await ctx.client.updateProperty({
        propertyId: dbId,
        data: {
            ...input,
            city: location.city,
            state: location.state,
            costType: input.costType ? CostType[input.costType] : CostType.Sale
        }
    })

    return true
}

export default resolver