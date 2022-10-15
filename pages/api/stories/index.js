import dbConnect from '../../../server/lib/dbConnect';
import StoryModel from '../../../server/models/Story';
import getAuthenticatedUser from '../../../server/helpers/auth/token';
import errorHandler from '../../../server/helpers/error-handler';
import {AuthorizationError, NotFoundError} from '../../../server/helpers/errors';

export default async function handler(req, res) {
    await dbConnect();
    const { method } = req;

    const session = await getAuthenticatedUser(req);

    switch (method) {
        case 'GET':
            try {
                const allStories = await StoryModel.find();
                return res.json(allStories);
            } catch (error) {
                return errorHandler(error, res);
            }

        case 'POST':
            try {
                if (!session) {
                    throw new AuthorizationError('Not logged in');
                }
            const story = { ...req.body, author: session.user._id };
            await StoryModel.create(story);

                return res.status(200).json({ message: 'Story Created' });
            } catch (error) {
                return errorHandler(error, res);
            }
        default:
            try {
                throw new NotFoundError(`Method not recognized in ${req.url}`);
            } catch (error) {
                return errorHandler(error, res);
            }
    }
}