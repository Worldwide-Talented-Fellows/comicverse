import User from '../../models/User';
import bcrypt from 'bcrypt';
import { NotFoundError } from '../errors';
import dbConnect from '../../lib/dbConnect';

export async function validateUser(credentials) {
    try {
        await dbConnect();
        const checkUser = await User.findOne({
            email: credentials.email,
        }).lean();
        if (!checkUser) throw new NotFoundError('User does not exists');

        const isPasswordValid = await bcrypt.compare(
            credentials.password,
            checkUser.password
        );

        if (!isPasswordValid) throw new Error('Password is not correct');
        const { password, ...user } = checkUser;
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}
