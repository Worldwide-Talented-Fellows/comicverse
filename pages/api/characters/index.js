import getAuthenticatedUser from '../../../server/helpers/auth/token';
import dbConnect from '../../../server/lib/dbConnect';
import CharacterModel from '../../../server/models/Character';

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
                return res.status(400).json({ errorMessage: error.message });
            }

        case 'POST':
            try {
                if (!session) {
                    return res
                        .status(401)
                        .json({ errorsMessage: 'Unauthorized' });
                }

                const character = { ...req.body, author: session.user._id };

                const dbCharacter = await CharacterModel.create(character);

                return res.send(dbCharacter);
            } catch (error) {
                return res.status(400).json({ errorMessage: error.message });
            }
        default:
            res.status(405).json({
                errorMessage: `No such method for this url: ${req.url}.`,
            });
            break;
    }
}
