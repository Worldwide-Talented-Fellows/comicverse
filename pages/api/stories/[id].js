import errorHandler from '../../../server/helpers/error-handler';
import {
    NotFoundError,
    AuthorizationError,
} from '../../../server/helpers/errors';
import dbConnect from '../../../server/lib/dbConnect';
import Comment from '../../../server/models/Story';
import getAuthenticatedUser from '../../../server/helpers/auth/token';
import Story from '../../../server/models/Story';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;
    await dbConnect();
    const session = await getAuthenticatedUser(req);
    switch (method) {
        case 'GET':
            /* GET /api/stories/:id => Get a specific story from database (by its id) */
            try {
                const story = await Story.findById(id);
                if (!story) {
                    throw new NotFoundError('Story not found.');
                }
                res.status(200).json({ success: true, data: story });
            } catch (error) {
                errorHandler(error, res);
            }
            break;
            case 'PUT':
            /* PUT /api/stories/:id => Updates a specific story in database */
            try {
                if (!session) {
                    throw new AuthorizationError("Not logged in");
                }
                if (session?.user?.role !== 'moderator'|| session?.user?.role !== 'admin') {
                    throw new AuthorizationError("You have not the rights to do this!");
                }
                const story = await Story.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });
                if (!power) throw new NotFoundError('Story not found');
                res.status(200).json({ success: true, data: story });
            } catch (error) {
                errorHandler(error, res);
            }
            break;
            case 'DELETE':
            /* DELETE /api/stories/:id => Remove a specific story from database */
            try {
                if (!session) {
                    throw new AuthorizationError("Not logged in");
                }
                if (session?.user?.role !== 'moderator' || session?.user?.role !== 'admin') {
                    throw new AuthorizationError("You have not the rights to do this!");
                }
                const deletedStory = await Story.deleteOne({ _id: id });
                if (!deletedStory?.deletedCount) {
                    throw new NotFoundError('Story not found');
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                errorHandler(error, res);
            }
            break;

        default:
            try {
                throw new NotFoundError(
                    `Method not found for route: ${req.url}.`
                );
            } catch (error) {
                errorHandler(error, res);
            }
            break;
        }
    }
    