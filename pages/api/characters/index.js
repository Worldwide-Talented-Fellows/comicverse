import dbConnect from '../../../server/lib/dbConnect';
import CharacterModel from '../../../server/models/Character';

import getAuthenticatedUser from '../../../server/helpers/auth/token';
import errorHandler from '../../../server/helpers/error-handler';
import { AuthorizationError } from '../../../server/helpers/errors';

export default async function handler(req, res) {
    await dbConnect();
    const { method } = req;

    const session = await getAuthenticatedUser(req);

    switch (method) {
        case 'GET':
            try {
                const allCharacters = await CharacterModel.find();
                return res.json(allCharacters);
            } catch (error) {
                return errorHandler(error, res);
            }

        case 'POST':
            try {
                if (!session) {
                    throw new AuthorizationError(
                        'You have to be logged in to do that.'
                    );
                }

                const character = { ...req.body, author: session.user._id };

                await CharacterModel.create(character);

                return res.status(200).json({ message: 'created' });
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
