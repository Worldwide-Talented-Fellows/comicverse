import dbConnect from '../../../server/lib/dbConnect';
import Power from '../../../server/models/Power';
import errorHandler from '../../../server/helpers/error-handler';
import {
    AuthorizationError,
    NotFoundError,
} from '../../../server/helpers/errors';
import getAuthenticatedUser from '../../../server/helpers/auth/token';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    await dbConnect();

    const session = await getAuthenticatedUser(req);

    switch (method) {
        case 'GET':
            /* GET /api/powers/:id => Get a specific power from database (by its id) */
            try {
                const power = await Power.findById(id);
                if (!power) {
                    return res
                        .status(404)
                        .json({ success: false, message: 'Power not found.' });
                }
                res.status(200).json({ success: true, data: power });
            } catch (error) {
                errorHandler(error, res);
            }
            break;

        case 'PUT':
            /* PUT /api/powers/:id => Update a specific power in database */
            try {
                if (!session) {
                    throw new AuthorizationError(
                        'You have to be logged in to do that.'
                    );
                }
                if (session?.user?.role !== 'moderator') {
                    throw new AuthorizationError("You can't do that.");
                }
                const power = await Power.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });
                if (!power) throw new NotFoundError('Power not found');
                res.status(200).json({ success: true, data: power });
            } catch (error) {
                errorHandler(error, res);
            }
            break;

        case 'DELETE':
            /* DELETE /api/powers/:id => Remove a specific power from database */
            try {
                if (!session) {
                    throw new AuthorizationError(
                        'You have to be logged in to do that.'
                    );
                }
                if (session?.user?.role !== 'moderator') {
                    throw new AuthorizationError("You can't do that.");
                }
                const deletedPower = await Power.deleteOne({ _id: id });
                if (!deletedPower?.deletedCount) {
                    throw new NotFoundError('Power not found');
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                errorHandler(error, res);
            }
            break;

        default:
            /* Method not found */
            throw new NotFoundError(`Method not found for route: ${req.url}.`);
            break;
    }
}
