import { MutationResolvers } from '../../../generated/graphqlgen';
import bcrypt from 'bcryptjs'
import client from 'twilio'
import { UserType } from '../../../generated/sdk';
import createToken from '../../functions/createToken';

const register: MutationResolvers.RegisterResolver = async (_, { input }, ctx) => {
    if (input.type === 'Agency') {
        if (!(input.cac && input.tin)) {
            return {
                token: '',
                message: 'Invalid Cac or Tin number'
            }
        }
    }
    const existingEmail = !!(await ctx.client.userByEmail({ email: input.email })).findUserByEmail?.email
    if (existingEmail) {
        return {
            token: '',
            message: 'User Exists'
        }
    }

    try {

        const userId = (await ctx.client.createUser({
            user: {
                email: input.email,
                name: input.name,
                password: await bcrypt.hash(input.password, 2),
                phone: input.phone,
                type: UserType[input.type]
            }
        })).createUser.id

        if (userId) {
            try {
                await client('', '').messages.create({
                    body: input.name[0] + " thank you for registering at zanga, start sharing links now!",
                    from: '+234' + '',
                    to: '+234' + input.phone
                })

            } catch (error) {
                console.log(error)
            }
        }

        return {
            token: createToken(userId),
            message: ''
        }
    } catch (error) {
        console.log(error)
        return {
            token: '',
            message: 'User Exists!'
        }
    }

}

export default register