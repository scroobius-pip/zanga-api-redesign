import { MutationResolvers } from '../../../generated/graphqlgen';
import createProperty from './createProperty'
import deleteProperty from './deleteProperty'
import incrementPropertyView from './incrementPropertyView'
// import login from './login'
// import register from './register'

const Mutation: MutationResolvers.Type = {
    incrementPropertyView,
    createProperty,
    deleteProperty,


}

export default Mutation