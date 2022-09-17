import getAuthenticatedUser from "../../../server/helpers/auth/token";
import errorHandler from "../../../server/helpers/error-handler";
import {
    AuthorizationError,
    NotFoundError
} from "../../../server/helpers/errors";
import dbConnect from "../../../server/lib/dbConnect";
import Chapter from '../../../server/models/Chapter';


export default async function handler(req, res) {
    const {
        query: {
            id
        },
        method,
    } = req;

    await dbConnect();

    const session = await getAuthenticatedUser(req);

    switch (method) {

        case 'GET':
            try {
                const chapter = await Chapter.findById(id);
                if (chapter) {
                    res.status(200).json({
                        success: true,
                        data: chapter
                    })
                } else {
                    throw new NotFoundError(`Chapter with ${id} does not exist`);
                }

            } catch (err) {
                errorHandler(err, res)
            }
            break;

        case 'PUT':
            try {
                const updChapter = req.body;
                const updatedChapter = Chapter.findByIdAndUpdate(id, updChapter, {
                    new: true,
                    runValidators: true
                });

                if (session.user?.role !== 'author' || session?.user .role !== 'moderator') {
                    throw new AuthorizationError('You have to be the author or a moderator to update this chapter');
                }

                if (updatedChapter) {
                    res.status(200).json({
                        success: true,
                        message: `Chapter with the id ${id} was updated successfully`,
                        data: updatedChapter
                    })
                } else {
                    throw new NotFoundError(`Could not update chapter, there is no chapter with the id ${id}`);
                }

            } catch (err) {
                errorHandler(err, res);
            }
            break;

        case 'DELETE':
            try {
                const deletedChapter = Chapter.findByIdAndDelete(id);

                if (session?.user?.role !== 'author' || session ?.user?.role !== 'moderator') {
                    throw new AuthorizationError(`You don't have the access to delete this chapter, You have to be the author or a moderator`);
                }

                if (deletedChapter) {
                    res.status(200).json({
                        success: true,
                        message: `Successfully deleted chapter with the id ${id}`,
                        data: {deletedChapter}
                    });
                } else {
                    throw new NotFoundError(`Could not delete chapter, chapter with id ${id} does not exist`);
                }
            } catch (err) {
                errorHandler(err, res);
            }
            break;

        default:
            try {
                const url = req.url;
                throw new NotFoundError(`Could not find method for the route ${url}`);
            } catch (err) {
                errorHandler(err, res)
            }
            break;
    }
}