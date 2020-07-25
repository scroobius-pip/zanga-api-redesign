import { MutationResolvers } from '../../../generated/graphqlgen';
import createProperty from './createProperty'
import deleteProperty from './deleteProperty'
// import login from './login'
// import register from './register'

const Mutation: MutationResolvers.Type = {

    createProperty,
    deleteProperty,


}

export default Mutation