import { MutationResolvers } from '../../../generated/graphqlgen';
import { UserType } from '../../../generated/sdk';


const resolver: MutationResolvers.UpdateUserResolver = async (_, { input: { type, name, phone } }, ctx) => {
    if (!ctx.userId) {
        return false
    }

    const modify = { type, name, phone }

    await ctx.client.updateUser({
        userId: ctx.userId,
        data: {

            ...removeEmpty(modify)
        }
    })

    return true

}


const removeEmpty = (obj: object): object =>
    Object.fromEntries(
        Object.entries(obj)
            .filter(([k, v]) => v != null)
            .map(([k, v]) => (typeof v === "object" ? [k, removeEmpty(v)] : [k, v]))
    )

export default resolver