import { MutationResolvers } from '../../../generated/graphqlgen';


const resolver: MutationResolvers.IncrementPropertyViewResolver = async (_, { input: { referrerId, propertyId } }, ctx) => {
    if (!referrerId) {
        await ctx.client.incrementPropertyVisit({ propertyId })
        return true
    }
    const propertyPointId = (await ctx.client.findPropertyPoint({ userId: referrerId, propertyId })).findPropertyPointByPropertyIdAndUserId?._id
    if (!propertyPointId) { return false }
    await ctx.client.incrementPropertyPoint({ propertyPointId })
    return true

}
export default resolver