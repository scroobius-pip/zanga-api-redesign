import { MutationResolvers } from '../../../generated/graphqlgen';


const resolver: MutationResolvers.IncrementPropertyViewResolver = async (_, { input: { referrerId, propertyId } }, ctx) => {
    if (!referrerId) {
        await ctx.client.incrementPropertyVisit({ propertyId })
        return true
    }
    let propertyPointId = (await ctx.client.findPropertyPoint({ userId: referrerId, propertyId })).findPropertyPointByPropertyIdAndUserId?._id
    if (!propertyPointId) {
        const referrerUser = (await ctx.client.findUserByUserId({ userId: referrerId })).findUserByUserId
        if (!referrerUser) {
            await ctx.client.incrementPropertyVisit({ propertyId })
            return true
        }
        propertyPointId = (await ctx.client.createPropertyPoint({
            data: {
                impressions: 0,
                profit: "0",
                propertyId,
                userId: referrerId,
                property: {
                    connect: propertyId
                },
                user: {
                    connect: referrerUser.dbId
                }
            }
        })).createPropertyPoint.id
    }
    await ctx.client.incrementPropertyPoint({ propertyPointId })
    return true

}
export default resolver