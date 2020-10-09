import { MutationResolvers } from '../../../generated/graphqlgen';
import createProperty from './createProperty'
import deleteProperty from './deleteProperty'
import incrementPropertyView from './incrementPropertyView'
import updateUser from './updateUser'
import assignBounty from './assignBounty'
import withdrawBalance from './withdrawBalance'
import updateProperty from './updateProperty'


const Mutation: MutationResolvers.Type = {
    incrementPropertyView,
    createProperty,
    deleteProperty,
    updateUser,
    assignBounty,
    withdrawBalance,
    updateProperty


}

export default Mutation