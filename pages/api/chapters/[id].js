import getAuthenticatedUser from "../../../server/helpers/auth/token";
import errorHandler from "../../../server/helpers/error-handler";
import {
    AuthorizationError,
    NotFoundError
} from "../../../server/helpers/errors";
import dbConnect from "../../../server/lib/dbConnect";
import Chapter from '../../../server/models/Chapter';


export default async function handler(req, res) {
    /** Pulling id and method from request */
    const {
        query: {
            id
        },
        method,
    } = req;

    /** Connects to MongoDB Database */
    await dbConnect();

    /** session variable to track users role */
    const session = await getAuthenticatedUser(req);

    switch (method) {

        /** Method GET endpoint /api/chapters/:id gets and returns the chapter with a specific id from the database */
        case 'GET':
            try {
                /** Stores the chapter with the id passed*/
                const chapter = await Chapter.findById(id);
                
                /** Returns the chapter with the id passed if it exists */
                if (chapter) {
                    res.status(200).json({
                        success: true,
                        data: chapter
                    })
                } else {
                    /** Otherwise this error if not found*/
                    throw new NotFoundError(`Chapter with ${id} does not exist`);
                }

            } catch (err) {
                /** Catches any error that occurs during the request and return it */
                errorHandler(err, res)
            }
            break;

        /** Method PUT endpoint /api/chapters/:id updates and returns the chapter that was updated */
        case 'PUT':
            try {

                /** Pulls, updates and stores the chapter */
                const updChapter = req.body;
                const updatedChapter = Chapter.findByIdAndUpdate(id, updChapter, {
                    new: true,
                    runValidators: true
                });
                
                /** Checks if user have the permision to update the chapter */
                if (session.user?.role !== 'author' || session?.user .role !== 'moderator') {
                    throw new AuthorizationError('You have to be the author or a moderator to update this chapter');
                }

                /** Returns the updated chapter if successful */
                if (updatedChapter) {
                    res.status(200).json({
                        success: true,
                        message: `Chapter with the id ${id} was updated successfully`,
                        data: updatedChapter
                    })
                } else {
                    /** Otherwise this error if not found*/
                    throw new NotFoundError(`Could not update chapter, there is no chapter with the id ${id}`);
                }

            } catch (err) {
                /** Catches any error that occurs during the request and return it */
                errorHandler(err, res);
            }
            break;

        /** Method DELETE endpoint /api/chapters/:id deletes and returns the chapter that was deleted */
        case 'DELETE':
            try {
                
                /** Stores the chapter to be deleted */
                const deletedChapter = Chapter.findByIdAndDelete(id);

                /** Checks if user have the permision to delete the chapter */
                if (session?.user?.role !== 'author' || session ?.user?.role !== 'moderator') {
                    throw new AuthorizationError(`You don't have the access to delete this chapter, You have to be the author or a moderator`);
                }

                /** Returns the deleted chapter if successful */
                if (deletedChapter) {
                    res.status(200).json({
                        success: true,
                        message: `Successfully deleted chapter with the id ${id}`,
                        data: {deletedChapter}
                    });
                } else {
                    /** Otherwise this error if not found*/
                    throw new NotFoundError(`Could not delete chapter, chapter with id ${id} does not exist`);
                }
            } catch (err) {
                /** Catches any error that occurs during the request and return it */
                errorHandler(err, res);
            }
            break;

        default:
            try {
                const url = req.url;
                /** Throws this error if a wrong method was requested */
                throw new NotFoundError(`Could not find method for the route ${url}`);
            } catch (err) {
                /** Catches any error that occurs during the request and return it */
                errorHandler(err, res)
            }
            break;
    }
}