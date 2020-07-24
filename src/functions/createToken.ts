import jwt from 'jsonwebtoken'
import getJwtSecret from './getJwtSecret';


export default (userId: string) => {
    return jwt.sign({
        userId,
    }, getJwtSecret(), {
        expiresIn: '30d',
    });
}

