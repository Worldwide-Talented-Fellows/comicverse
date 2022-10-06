import { MAX_LIMIT } from '../../../server/constants/search';
import errorHandler from '../../../server/helpers/error-handler';
import { getLimitAndSkip } from '../../../server/helpers/query-helper';
import dbConnect from '../../../server/lib/dbConnect';
import Comment from '../../../server/models/Comment';
import { NotFoundError } from '../../../server/helpers/errors';

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    try {
        switch (method) {
            case 'GET':
                const { authorId, date, chapter, sort } = req.query;
                let { page, limit } = req.query;

                limit = limit > MAX_LIMIT ? MAX_LIMIT : limit;
                const query = Comment.find({});
                if (authorId) {
                    query.find({
                        author: userId,
                    });
                }
                if (chapter) {
                    query.find({
                        chapter,
                    });
                }
                if (sort) {
                    query.sort(sort);
                }
                if (date) {
                    query.find({
                        createdAt: date,
                    });
                }
                const totalResult = await query.clone().count();

                const { qLimit, skip } = getLimitAndSkip(limit, page);

                query.skip(skip).limit(qLimit);

                const comments = await query;
                return res.status(200).json({
                    success: true,
                    totalResult,
                    results: comments.length,
                    data: users,
                });
            case 'POST':
                const data = req.body;
                const newComment = await Comment.create(data);
                if (!newComment) throw Error("Can't create the comment");
                return res.status(200).json({
                    success: true,
                    data: newComment,
                });
            default:
                throw new NotFoundError('Method not found');
        }
    } catch (error) {
        return errorHandler(error, res);
    }
}
