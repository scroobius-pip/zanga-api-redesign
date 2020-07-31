import { UserType } from '../../generated/sdk';
import { client } from '../index';
import { nanoid } from 'nanoid'

const findOrCreateUser = async (email: string, name: string): Promise<{ email: string, userId: string }> => {
    try {
        const { findUserByEmail } = await client.findUserByEmail({ email });
        if (!findUserByEmail) {
            const { createUser: { email: newEmail, dbId } } = await client.createUser({
                user: {
                    balance: "0",
                    email,
                    name,
                    type: UserType.Unassigned,
                    userId: nanoid(10),
                }
            });
            return { email: newEmail, userId: dbId }
        }
        return { email: findUserByEmail.email, userId: findUserByEmail.dbId }
    } catch (error) {
        console.error(error)
        throw error
    }
};

export default findOrCreateUser