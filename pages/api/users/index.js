import { unstable_getServerSession } from "next-auth";
import { MAX_LIMIT } from "../../../server/constants/search";
import { errorHandler } from "../../../server/helpers/error-handler";
import { getLimitAndSkip } from "../../../server/helpers/query-helper";
import dbConnect from "../../../server/lib/dbConnect";
import User from "../../../server/models/User";

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const { name, email, role, emailVerified, sort } = req.query;
				let { page, limit } = req.query;

				limit = limit > MAX_LIMIT ? MAX_LIMIT : limit;
				const query = User.find({});
				if (name) {
					query.find({
						name: { $regex: name, $options: "gi" },
					});
				}
				if (sort) {
					query.sort(sort);
				}
				if (email) {
					query.find({
						email: { $regex: email, $options: "gi" },
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
                res.status(200).json({
                    success: true,
                    totalResult,
                    results: users.length,
                    data: users
                })
			} catch (error) {
                errorHandler(error, req, res)
            }
			break;

        case 'POST':
            const { body: user } = req;
            try {
                const createdUser = await User.create(user);
                if (!createdUser) throw Error("Unable to create user");
                return res.status(200).json({
                    success: true,
                    data: createdUser,
                });
            } catch (error) {
                errorHandler(error, req, res);
            }
        break;
		default:
			break;
	}
}
