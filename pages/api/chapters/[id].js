import getAuthenticatedUser from "../../../server/helpers/auth/token";
import dbConnect from "../../../server/lib/dbConnect";

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    await dbConnect();

    const session = await getAuthenticatedUser(req);
}