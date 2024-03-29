import { QueryResolvers } from '../../../generated/graphqlgen';
import meResolver from './me';
import propertiesResolver from './properties';
import propertyResolver from './property';
import featuredPropertiesResolver from './featuredProperties';
import postedPropertiesResolver from './postedProperties'
import sharedPropertiesResolver from './sharedProperties'
import getPaymentLinkResolver from './getPaymentLink'
import metaResolver from './meta'
import getBankAccountNameResolver from './getBankAccountName'

const Query: QueryResolvers.Type = {
    me: meResolver,
    properties: propertiesResolver,
    property: propertyResolver,
    featuredProperties: featuredPropertiesResolver,
    postedProperties: postedPropertiesResolver,
    sharedProperties: sharedPropertiesResolver,
    getPaymentLink: getPaymentLinkResolver,
    meta: metaResolver,
    getBankAccountName: getBankAccountNameResolver
}

export default Query