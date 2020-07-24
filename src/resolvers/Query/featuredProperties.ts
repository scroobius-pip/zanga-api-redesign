import { QueryResolvers } from '../../../generated/graphqlgen';

const featuredPropertiesResolver: QueryResolvers.FeaturedPropertiesResolver = async (_, args, ctx) =>
    (await ctx.client.featuredProperties())
        .findPropertyByFeatured
        .data

export default featuredPropertiesResolver