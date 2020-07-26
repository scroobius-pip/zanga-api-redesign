import { MutationResolvers } from '../../../generated/graphqlgen';
import createProperty from './createProperty'
import deleteProperty from './deleteProperty'
import incrementPropertyView from './incrementPropertyView'
import updateUser from './updateUser'
import assignBounty from './assignBounty'

const Mutation: MutationResolvers.Type = {
    incrementPropertyView,
    createProperty,
    deleteProperty,
    updateUser,
    assignBounty,


}

export default Mutation