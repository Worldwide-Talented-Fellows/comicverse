import { MAX_LIMIT } from '../../../server/constants/search';
import { errorHandler } from '../../../server/helpers/error-handler';
import { getLimitAndSkip } from '../../../server/helpers/query-helper';
import dbConnect from '../../../server/lib/dbConnect';
import Comment from '../../../server/models/Comment';
import { NotFoundError } from '../../../server/helpers/errors';

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'GET':
            try {
                const { authorId, date, chapter, sort } = req.query;
                let { page, limit } = req.query;

                limit = limit > MAX_LIMIT ? MAX_LIMIT : limit;
                const query = Comment.find({});
                if (authorId) {
                    query.find({
                        author: userId,
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
                if (role) {
                    query.find({
                        role,
                    });
                }
                if (emailVerified) {
                    query.find({
                        emailVerified,
                    });
                }

                const totalResult = await query.clone().count();

                const { qLimit, skip } = getLimitAndSkip(limit, page);

                query.skip(skip).limit(qLimit);

                const users = await query;
                return res.status(200).json({
                    success: true,
                    totalResult,
                    results: users.length,
                    data: users,
                });
            } catch (error) {
                return errorHandler(error, req, res);
            }
        default:
            return errorHandler(new NotFoundError('Method not found'), res);
    }
}
