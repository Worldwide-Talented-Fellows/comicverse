import { DEFAULT_LIMIT, MAX_LIMIT } from "../../../server/constants/search";
import getAuthenticatedUser from "../../../server/helpers/auth/token";
import errorHandler from "../../../server/helpers/error-handler";
import dbConnect from "../../../server/lib/dbConnect";
import Chapter from "../../../server/models/Chapter";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    const session = await getAuthenticatedUser(req);

    switch (method) {
        case "GET_ALL_CHAPTERS":
            try {
                const {chapter, sort} = req.query;
                let {limit, page} = req.query;

                if (limit > MAX_LIMIT) {
                    limit = MAX_LIMIT;
                }

                const query = Chapter.find();

                if (chapter) {
                    query.find({chapter: {$regex: chapter, $options: 'gi'}});
;                }

                if(sort) {
                    query.sort(sort);
                }

                page = page * 1 || 1;
                limit = limit * 1 || DEFAULT_LIMIT;
                const offset = (page - 1) * limit;
                query.skip(offset).limit(limit);

                const chapters = await query;
                const results = chapters.length;
                const totalResults = query.clone().count();

                res.status(200).json({
                    success: true,
                    totalResults: totalResults,
                    results: results,
                    data: chapters
                });
            }
            catch (err) {
                errorHandler(err, res);
            }
        break;
        }
}