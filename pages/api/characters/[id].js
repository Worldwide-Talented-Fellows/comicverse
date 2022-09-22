import dbConnect from '../../../server/lib/dbConnect';
import CharacterModel from '../../../server/models/Character';

import getAuthenticatedUser from '../../../server/helpers/auth/token';
import errorHandler from '../../../server/helpers/error-handler';
import {
    AuthorizationError,
    NotFoundError,
    ForbiddenError,
} from '../../../server/helpers/errors';

export default async function handler(req, res) {
    await dbConnect();
    const {
        method,
        query: { id },
    } = req;

    const checkFunc = async (id) => {
        if (!session) {
            throw new AuthorizationError(
                'You have to be logged in to do that.'
            );
        }

        const character = await CharacterModel.findById(id);

        if (!character) {
            throw new NotFoundError('No character with such data');
        }

        return character;
    };

    const session = await getAuthenticatedUser(req);

    switch (method) {
        case 'GET':
            try {
                const character = await CharacterModel.findById(id);
                return res.json(character);
            } catch (error) {
                return res
                    .status(404)
                    .json({ errorMessage: 'No character with such id' });
            }

        case 'PUT':
            try {
                const fieldsToUpdate = req.body;

                const character = await checkFunc(id);

                const idOfAuthor = character.author.valueOf();

                if (
                    session.user._id === idOfAuthor ||
                    session.user.role === 'moderator' ||
                    session.user.role === 'admin'
                ) {
                    await CharacterModel.findByIdAndUpdate(id, fieldsToUpdate, {
                        new: true,
                        runValidators: true,
                    });
                    return res.status(200).json({ message: 'updated' });
                }

                throw new ForbiddenError(
                    'You dont have permissions to do that'
                );
            } catch (error) {
                return errorHandler(error, res);
            }

        case 'DELETE':
            try {
                const character = await checkFunc(id);

                const idOfAuthor = character.author.valueOf();

                if (
                    session.user._id === idOfAuthor ||
                    session.user.role === 'moderator' ||
                    session.user.role === 'admin'
                ) {
                    await CharacterModel.deleteOne(character);
                    return res.status(200).json({ message: 'deleted' });
                }

                throw new ForbiddenError(
                    'You dont have permissions to do that'
                );
            } catch (error) {
                return errorHandler(error, res);
            }

        default:
            res.status(405).json({
                errorMessage: `No such method for this url: ${req.url}.`,
            });
            break;
    }
}
