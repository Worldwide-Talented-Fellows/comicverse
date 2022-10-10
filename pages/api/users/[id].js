import errorHandler from '../../../server/helpers/error-handler';
import {
    NotFoundError,
    AuthorizationError,
} from '../../../server/helpers/errors';
import dbConnect from '../../../server/lib/dbConnect';
import User from '../../../server/models/User';
import getAuthenticatedUser from '../../../server/helpers/auth/token';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;
    await dbConnect();
    
    switch (method) {
        case 'GET':
            try {
                const user = await User.findById(id).lean();
                if (!user) throw new NotFoundError('User not found');
                const { password, ...responseData } = user;
                res.status(200).json({ success: true, data: responseData });
            } catch (error) {
                return errorHandler(error, res);
            }
        case 'PUT':
            const { body: userUpdateData } = req;
            try {
                const user = await getAuthenticatedUser(req);
                if (!user || user.id !== id)
                    throw new AuthorizationError('Do not have permission');

                const updatedUser = await User.findByIdAndUpdate(
                    id,
                    userUpdateData,
                    {
                        new: true,
                        runValidators: true,
                    }
                );

                if (!updatedUser) throw NotFoundError('Unable to update user');

                const { password, ...responseData } = updatedUser;

                return res.status(200).json({
                    success: true,
                    data: responseData,
                });
            } catch (error) {
                return errorHandler(error, res);
            }
        case 'DELETE':
            try {
                const deletedUser = await User.deleteOne({
                    _id: id,
                });

                if (!deletedUser?.deletedCount)
                    throw new NotFoundError('User not found');

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                return errorHandler(error, req, res);
            }

        default:
            return errorHandler(
                new NotFoundError('Method not found'),
                res
            );
    }
}
