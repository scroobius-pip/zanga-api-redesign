import { QueryResolvers } from '../../../generated/graphqlgen';
import { CostType } from '../../../generated/sdk';
import mapDbPropertyToProperty from './mapDbPropertyToProperty';

const SIZE = 50

const propertiesResolver: QueryResolvers.PropertiesResolver = async (_, { input }, ctx) => {
    const { cursor, state, type, budget } = input

    const { data, after, before } = (state && type ? (await ctx.client.properties({ state, type: CostType[type], cursor, size: SIZE })).findPropertiesByCostTypeAndState :
        !state && !type ? (await ctx.client.allProperties({ cursor, size: SIZE })).allProperties :
            state ? (await ctx.client.allPropertiesState({ state, size: SIZE, cursor })).allPropertiesByState :
                (await ctx.client.allPropertiesCostType({ type: CostType[type ?? 'Rent'], cursor, size: SIZE })).allPropertiesByCostType)



    const properties = budget ? data.map(mapDbPropertyToProperty).filter((property) => property.costValue <= (budget)) : data.map(mapDbPropertyToProperty)

    return {
        properties,
        pageInfo: {
            after: after ?? '',
            before: before ?? ''
        }
    }

    // if (state && type) {
    //     const { data, after, before } = (await ctx.client.properties({ state, type: CostType[type], cursor, size: 50 })).findPropertiesByCostTypeAndState
    //     const properties = budget ? data.map(mapDbPropertyToProperty).filter(property => property.costValue <= (budget)) : data.map(mapDbPropertyToProperty)
    //     return {
    //         properties,
    //         pageInfo: {
    //             after: after ?? '',
    //             before: before ?? ''
    //         }
    //     }
    // }



}


export default propertiesResolver