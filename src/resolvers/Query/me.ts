import { QueryResolvers } from '../../../generated/graphqlgen';
import { AuthenticationError } from 'apollo-server-core';
import { User } from '../../types/models';

const meResolver: QueryResolvers.MeResolver = async (_, __, ctx) => {
    if (!ctx.userId) {
        throw new AuthenticationError('Token Not Passed')
    }

    const user = (await ctx.client.user({ id: ctx.userId })).findUserByID
    if (!user) return null

    const userProperties = user?.properties.data ?? []
    const userPoints = user.propertyPoints ?? []
    const userPointsData = userPoints?.data ?? []
    return {
        ...user,
        properties: userProperties,
        point: {
            propertyPoints: (userPointsData).map(userPoint => {
                return {
                    points: userPoint?.impressions,
                    profit: userPoint?.profit,
                    propertyId: userPoint?.propertyId,
                    propertyTitle: userPoint?.propertyTitle
                }
            }),
            totalPoints: userPointsData.reduce((acc, val) => {
                const impressions = val ? val.impressions : 0
                return acc + impressions
            }, 0),
            totalProfit: userPointsData.reduce((acc, current) => {
                const profit = current ? current.profit : 0
                return acc + profit
            }, 0),
        }
    } as User
}

export default meResolver