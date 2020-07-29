import { QueryResolvers } from '../../../generated/graphqlgen';
import mapDbPropertyToProperty from './mapDbPropertyToProperty';

const featuredPropertiesResolver: QueryResolvers.FeaturedPropertiesResolver = async (_, args, ctx) => {
    return {
        pageInfo: {
            after: '',
            before: ''
        },
        properties: (await ctx.client.featuredProperties()).findPropertyByFeatured.data.map(mapDbPropertyToProperty)
    }
}


export default featuredPropertiesResolver