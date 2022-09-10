import { MAX_LIMIT } from '../../../server/constants/search';
import { errorHandler } from '../../../server/helpers/error-handler';
import { getLimitAndSkip } from '../../../server/helpers/query-helper';
import dbConnect from '../../../server/lib/dbConnect';
import User from '../../../server/models/User';

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'GET':
            try {
                const { name, email, role, emailVerified, sort } = req.query;
                let { page, limit } = req.query;

                limit = limit > MAX_LIMIT ? MAX_LIMIT : limit;
                const query = User.find({}, { password: 0 });
                if (name) {
                    query.find({
                        name: { $regex: name, $options: 'gi' },
                    });
                }
                if (sort) {
                    query.sort(sort);
                }
                if (email) {
                    query.find({
                        email: { $regex: email, $options: 'gi' },
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
            return errorHandler(
                new RestrictedMethodError('Method not found'),
                res
            );
    }
}
