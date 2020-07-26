import { QueryResolvers } from '../../../generated/graphqlgen';
import meResolver from './me';
import propertiesResolver from './properties';
import propertyResolver from './property';
import featuredPropertiesResolver from './featuredProperties';

const Query: QueryResolvers.Type = {
    me: meResolver,
    properties: propertiesResolver,
    property: propertyResolver,
    featuredProperties: featuredPropertiesResolver

}

export default Query