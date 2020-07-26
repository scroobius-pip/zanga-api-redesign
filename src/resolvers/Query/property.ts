import { QueryResolvers } from '../../../generated/graphqlgen';

const propertyResolver: QueryResolvers.PropertyResolver = async (_, args, ctx) => {

    const property = (await ctx.client.property({ slug: args.slug })).findPropertyBySlug

    return {
        ...property,
        expense: property?.expense ?? 0,
        remainingExpense: property?.remainingExpense ?? 0,
        bounty: property?.bounty ?? 0,
        featured: !!(property?.featured),
        owner: {
            ...property.owner,
            phone: property.owner?.phone ?? ''
        },
        images: property.images ?? [],
        id: property.dbId
    }

}

export default propertyResolver