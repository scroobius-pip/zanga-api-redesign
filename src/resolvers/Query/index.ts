import { QueryResolvers } from '../../../generated/graphqlgen';
import meResolver from './me';
import propertiesResolver from './properties';
import propertyResolver from './property';
import featuredPropertiesResolver from './featuredProperties';
import postedPropertiesResolver from './postedProperties'
import sharedPropertiesResolver from './sharedProperties'

const Query: QueryResolvers.Type = {
    me: meResolver,
    properties: propertiesResolver,
    property: propertyResolver,
    featuredProperties: featuredPropertiesResolver,
    postedProperties: postedPropertiesResolver,
    sharedProperties: sharedPropertiesResolver

}

export default Query