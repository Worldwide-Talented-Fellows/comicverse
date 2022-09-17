import dbConnect from "../../../server/lib/dbConnect";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();
}