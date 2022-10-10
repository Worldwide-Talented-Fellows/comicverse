import errorHandler from '../../../server/helpers/error-handler';
import {
    NotFoundError,
    AuthorizationError,
} from '../../../server/helpers/errors';
import dbConnect from '../../../server/lib/dbConnect';
import Comment from '../../../server/models/Comment';
import getAuthenticatedComment from '../../../server/helpers/auth/token';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;
    await dbConnect();
    
    switch (method) {
        case 'GET':
            try {
                const comment = await Comment.findById(id).lean();
                if (!comment) throw new NotFoundError('Comment not found');
                res.status(200).json({ success: true, data: comment });
            } catch (error) {
                return errorHandler(error, res);
            }
        case 'PUT':
            const { body: commentUpdateData } = req;
            try {
                const user = await getAuthenticatedComment(req);
                const comment = await Comment.findById(id);
                if (!user || !comment || user.id !== comment.author.id)
                    throw new AuthorizationError('Do not have permission');

                const updatedComment = await Comment.findByIdAndUpdate(
                    id,
                    commentUpdateData,
                    {
                        new: true,
                        runValidators: true,
                    }
                );

                if (!updatedComment) throw NotFoundError('Unable to update comment');

                return res.status(200).json({
                    success: true,
                    data: updatedComment,
                });
            } catch (error) {
                return errorHandler(error, res);
            }
        case 'DELETE':
            try {
                const deletedComment = await Comment.deleteOne({
                    _id: id,
                });

                if (!deletedComment?.deletedCount)
                    throw new NotFoundError('Comment not found');

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
