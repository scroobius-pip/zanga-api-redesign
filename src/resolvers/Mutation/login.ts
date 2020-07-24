import { MutationResolvers } from '../../../generated/graphqlgen';
import bcrypt from 'bcryptjs'
import createToken from '../../functions/createToken';

const login: MutationResolvers.LoginResolver = async (_, { input: { email, password } }, ctx) => {
    const user = (await ctx.client.userByEmail({ email })).findUserByEmail
    if (!user) {
        return {
            token: '',
            message: 'Email Not Found'
        }
    }

    return {
        token: bcrypt.compareSync(password, user.password) ? createToken(user.id) : '',
        message: ''
    }

}


export default login