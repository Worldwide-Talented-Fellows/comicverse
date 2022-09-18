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
        /** Method GET endpoint /api/chapters get and return all the chapters in the database */
        case "GET":
            try {
                /** Pulls title and sort from request query*/
                const {
                    title,
                    sort
                } = req.query

                /** Pulls limit and page from request query with let because they'd be reassigned to another value later*/
                let {
                    limit,
                    page
                } = req.query;

                /**Sets the limit to maximum limit if the value exceeds the maximum limit*/
                limit = limit > MAX_LIMIT ? MAX_LIMIT : limit;

                const query = Chapter.find({});

                /**Filters the chapters by title */
                if (title) {
                    query.find({
                        title: {
                            $regex: title,
                            $options: 'gi'
                        }
                    });;
                }

                /**Sorts chapters */
                if (sort) {
                    query.sort(sort);
                }

                /**Paginates chapter by limit */
                page = page * 1 || 1;
                limit = limit * 1 || DEFAULT_LIMIT;
                const offset = (page - 1) * limit;
                query.skip(offset).limit(limit);

                const chapters = await query;
                const results = chapters.length;
                const totalResults = query.clone().count();

                /** Returns all the chapters if successful */
                res.status(201).json({
                    success: true,
                    totalResults: totalResults,
                    results: results,
                    data: chapters
                });
            } catch (err) {
                /** Catches any error that occurs during the request and return it */
                errorHandler(err, res);
            };
            break;

            /** Method POST endpoint /api/chapters creates a new chapter and adds it to the database */
        case 'POST':
            try {
                
                /**Checks if user is logged in before creating a chapter */
                if (!session) {
                    throw new AuthorizationError('Pls login to create a new chapter');
                }
                const chapter = await Chapter.create(req.body);

                /** Create the chapter if successful */
                res.status(201).json({
                    success: true,
                    message: 'Successfully created a new chapter',
                    data: chapter
                });

            } catch (err) {
                /** Catches any error that occurs during the request and return it */
                errorHandler(err, res);
            };
            break;

        default:
            try {
                const url = req.url;
                /** Throws this error if a wrong method was requested */
                throw new NotFoundError(`Could not find method for the route '${url}'`);
            } catch (err) {
                /** Catches any error that occurs during the request and return it */
                errorHandler(err, res)
            }
            break;
    }
}