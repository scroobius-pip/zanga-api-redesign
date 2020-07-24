import { QueryResolvers } from '../../../generated/graphqlgen';
import meResolver from './me';
import propertiesResolver from './properties';
import propertyResolver from './property';
import { POINT_RATE } from '../../constants';
import featuredPropertiesResolver from './featuredProperties';

const Query: QueryResolvers.Type = {
    me: meResolver,
    properties: propertiesResolver,
    property: propertyResolver,
    currentRate: () => POINT_RATE,
    featuredProperties: featuredPropertiesResolver

}

export default Query