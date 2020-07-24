import { QueryResolvers } from '../../../generated/graphqlgen';
import { CostType } from '../../../generated/sdk';

const propertiesResolver: QueryResolvers.PropertiesResolver = async (_, args, ctx) =>
    (await ctx.client.properties({ costType: CostType[args.type] }))
        .findPropertiesByCostType
        .data

export default propertiesResolver