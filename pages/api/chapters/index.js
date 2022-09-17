import {
    DEFAULT_LIMIT,
    MAX_LIMIT
} from "../../../server/constants/search";
import getAuthenticatedUser from "../../../server/helpers/auth/token";
import errorHandler from "../../../server/helpers/error-handler";
import dbConnect from "../../../server/lib/dbConnect";
import Chapter from "../../../server/models/Chapter";

export default async function handler(req, res) {
    const {
        method
    } = req;

    await dbConnect();

    const session = await getAuthenticatedUser(req);

    switch (method) {
        case "GET":
            try {
                const {
                    title,
                    sort
                } = req.query
                let {
                    limit,
                    page
                } = req.query;
                
                limit = limit > MAX_LIMIT ? MAX_LIMIT : limit;

                const query = Chapter.find({});

                if (title) {
                    query.find({
                        title: {
                            $regex: title,
                            $options: 'gi'
                        }
                    });;
                }

                if (sort) {
                    query.sort(sort);
                }

                page = page * 1 || 1;
                limit = limit * 1 || DEFAULT_LIMIT;
                const offset = (page - 1) * limit;
                query.skip(offset).limit(limit);

                const chapters = await query;
                const results = chapters.length;
                const totalResults = query.clone().count();

                res.status(201).json({
                    success: true,
                    totalResults: totalResults,
                    results: results,
                    data: chapters
                });
            } catch (err) {
                errorHandler(err, res);
            };
            break;

        case 'POST':
            try {
                if (!session) {
                    throw new AuthorizationError('Pls login to create a new chapter');
                }
                const chapter = await Chapter.create(req.body);

                res.status(201).json({
                    success: true,
                    message: 'Successfully created a new chapter',
                    data: chapter
                });

            } catch (err) {
                errorHandler(err, res);
            };
            break;

        default:
            try {
                const url = req.url;
                throw new NotFoundError(`Could not find method for the route '${url}'`);
            } catch (err) {
                errorHandler(err, res)
            }
            break;
    }
}