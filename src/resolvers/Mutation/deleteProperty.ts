import { MutationResolvers } from '../../../generated/graphqlgen'
import { AuthenticationError } from 'apollo-server-core'

const deleteProperty: MutationResolvers.DeletePropertyResolver = async (_, args, ctx) => {
    if (!ctx.userId) {
        throw new AuthenticationError('Token Not Passed')
    }

    await ctx.client.deleteProperty({ id: args.id })
    return true
}

export default deleteProperty