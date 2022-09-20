import getAuthenticatedUser from '../../../server/helpers/auth/token';
import dbConnect from '../../../server/lib/dbConnect';
import CharacterModel from '../../../server/models/Character';

export default async function handler(req, res) {
    await dbConnect();
    const {
        method,
        query: { id },
    } = req;

    const session = await getAuthenticatedUser(req);

    const checkFunc = (req) => {};

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
                if (!session) {
                    return res
                        .status(401)
                        .json({ errorsMessage: 'Unauthorized' });
                }

                const fieldsToUpdate = req.body;
                const character = await CharacterModel.findById(id);

                if (!character) {
                    return res.status(404).send('No character with such id');
                }

                const idOfAuthor = character.author.valueOf();

                if (
                    session.user._id === idOfAuthor ||
                    session.user.role === 'moderator'
                ) {
                    await CharacterModel.findByIdAndUpdate(id, fieldsToUpdate, {
                        new: true,
                        runValidators: true,
                    });
                    return res.status(200).send('updated');
                }

                return res.status(403).send("You can't do that");
            } catch (error) {
                return res.status(404).json({ errorMessage: error.message });
            }

        case 'DELETE':
            try {
                if (!session) {
                    return res
                        .status(401)
                        .json({ errorsMessage: 'Unauthorized' });
                }

                const character = await CharacterModel.findById(id);

                if (!character) {
                    return res.status(404).send('No character with such id');
                }

                const idOfAuthor = character.author.valueOf();

                if (
                    session.user._id === idOfAuthor ||
                    session.user.role === 'moderator'
                ) {
                    await CharacterModel.deleteOne(character);
                    return res.status(200).send('deleted');
                }

                return res.status(403).send("You can't do that");
            } catch (error) {
                return res.status(404).json({ errorMessage: error.message });
            }

        default:
            res.status(405).json({
                errorMessage: `No such method for this url: ${req.url}.`,
            });
            break;
    }
}
