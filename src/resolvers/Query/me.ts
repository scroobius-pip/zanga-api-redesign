import { QueryResolvers } from '../../../generated/graphqlgen';
import { AuthenticationError } from 'apollo-server-core';
import { User } from '../../types/models';
import { UserType } from '../../../generated/sdk';
import { mapDbPropertyToProperty } from './mapDbPropertyToProperty';

const meResolver: QueryResolvers.MeResolver = async (_, __, ctx) => {
    if (!ctx.userEmail) {
        throw new AuthenticationError('Token Not Passed')
    }


    const user = (await ctx.client.findUserByEmail({ email: ctx.userEmail })).findUserByEmail
    if (!user) return null

    // const userProperties = user?.properties.data ?? []
    // const userPoints = user.propertyPoints ?? []
    // const userPointsData = userPoints?.data ?? []
    return {
        email: user.email,
        id: user.userId,
        name: user.name,
        phone: user?.phone ?? '',
        type: user.type,
    }
}

export default meResolver