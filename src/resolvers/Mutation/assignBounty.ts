import { MutationResolvers } from '../../../generated/graphqlgen';


const resolver: MutationResolvers.AssignBountyResolver = async (_, { input: { bounty, expense, propertyId } }, ctx) => {
    if (ctx.userId) {
        return false
    }
    await ctx.client.updateProperty({
        propertyId,
        data: {
            bounty: Math.abs(bounty),
            remainingExpense: Math.abs(expense)
        }
    })
    return true

}
export default resolver