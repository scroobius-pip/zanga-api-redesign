import { MutationResolvers } from '../../../generated/graphqlgen';
import contactAgent from './contactAgent'
import createProperty from './createProperty'
import deleteProperty from './deleteProperty'
import login from './login'
import register from './register'

const Mutation: MutationResolvers.Type = {
    contactAgent,
    createProperty,
    deleteProperty,
    login,
    register
}

export default Mutation