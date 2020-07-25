import { UserType } from '../../generated/sdk';
import { client } from '../index';
import { nanoid } from 'nanoid'

const findOrCreateUser = async (email: string, name: string): Promise<string> => {
    try {
        const { findUserByEmail } = await client.findUserByEmail({ email });
        if (!findUserByEmail) {
            await client.createUser({
                user: {
                    balance: 0,
                    email,
                    name,
                    type: UserType.Unassigned,
                    userId: nanoid(10),
                }
            });
        }
        return email
    } catch (error) {
        console.error(error)
        throw error
    }
};

export default findOrCreateUser