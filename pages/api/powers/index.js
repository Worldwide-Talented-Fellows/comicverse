import { unstable_getServerSession } from 'next-auth';
import { DEFAULT_LIMIT, MAX_LIMIT } from '../../../server/constants/search';
import errorHandler from '../../../server/helpers/error-handler';
import {
    AuthorizationError,
    NotFoundError,
} from '../../../server/helpers/errors';
import dbConnect from '../../../server/lib/dbConnect';
import Power from '../../../server/models/Power';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    const session = await unstable_getServerSession(req, res, authOptions);

    switch (method) {
        case 'GET':
            /* GET /api/powers => Get powers from database */
            try {
                const { name, sort } = req.query;
                let { page, limit } = req.query;

                // Ensure limit does not exceed MAX_LIMIT
                if (limit > MAX_LIMIT) {
                    limit = MAX_LIMIT;
                }

                const query = Power.find({});

                // Filter query
                if (name) {
                    query.find({
                        name: { $regex: name, $options: 'gi' },
                    });
                }

                // Sort query
                if (sort) {
                    query.sort(sort);
                }

                // Count all matching documents
                const totalResults = await query.clone().count();

                // Paginate results
                page = page * 1 || 1;
                limit = limit * 1 || DEFAULT_LIMIT;
                const skip = (page - 1) * limit;
                query.skip(skip).limit(limit);

                // Execute query and send back the response
                const powers = await query;
                res.status(200).json({
                    success: true,
                    totalResults,
                    results: powers.length,
                    data: powers,
                });
            } catch (error) {
                errorHandler(error, res);
            }
            break;
        case 'POST':
            /* POST /api/powers => Add a power to database */
            try {
                if (!session) {
                    throw new AuthorizationError(
                        'You have to be logged in to do that.'
                    );
                }
                if (session?.user?.role !== 'moderator') {
                    throw new AuthorizationError("You can't do that.");
                }
                const power = await Power.create(req.body);
                res.status(201).json({ success: true, data: power });
            } catch (error) {
                errorHandler(error, res);
            }
            break;
        default:
            /* Method not found */
            try {
                throw new NotFoundError(
                    `Method not found for route: ${req.url}.`
                );
            } catch (error) {
                errorHandler(error, res);
            }
            break;
    }
}
