import dbConnect from "../../../server/lib/dbConnect";

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    await dbConnect();
}