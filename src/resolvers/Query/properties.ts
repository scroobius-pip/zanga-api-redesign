import { QueryResolvers } from '../../../generated/graphqlgen';
import { CostType } from '../../../generated/sdk';
import { mapDbPropertyToProperty } from './mapDbPropertyToProperty';

const propertiesResolver: QueryResolvers.PropertiesResolver = async (_, { input }, ctx) => {
    const { cursor, state, type, budget } = input

    const { data, after, before } = (await ctx.client.properties({ state, type: CostType[type], cursor, size: 25 })).findPropertiesByCostTypeAndState
    return {
        properties: data.map(mapDbPropertyToProperty),
        pageInfo: {
            after: after ?? '',
            before: before ?? ''
        }
    }
}


export default propertiesResolver