import errorHandler from '../../../server/helpers/error-handler';
import {
    MissingCredentialsError,
    RestrictedMethodError,
} from '../../../server/helpers/errors';
import User from '../../../server/models/User';
import bcrypt from 'bcrypt';
import dbConnect from '../../../server/lib/dbConnect';

export default async function handler(req, res) {
    const { method } = req;

    try {
        if (method !== 'POST')
            throw new RestrictedMethodError('Only post requests are allowed');

        await dbConnect();
        const credentials = req.body;
        if (!credentials?.password)
            throw new MissingCredentialsError('Password is required');

        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const userData = {
            ...credentials,
            password: hashedPassword,
            role: 'moderator',
            emailVerified: false,
        };
        const user = await User.create(userData);
        return res.status(200).json({ success: true, user });
    } catch (error) {
        errorHandler(error, res);
    }
}
