import dbConnect from '../../../server/lib/dbConnect';
import Power from '../../../server/models/Power';
import errorHandler from '../../../server/helpers/error-handler';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            /* GET /api/powers/random => Get a random power from database */
            try {
                const getRandomNumber = (min, max) => {
                    return Math.random() * (max - min) + min;
                };
                const randomNumber = getRandomNumber(0, 100);
                let power = [];
                if (randomNumber > 80) {
                    const randomPower = await Power.aggregate([
                        { $sample: { size: 1 } },
                    ]);
                    power = randomPower;
                }
                res.status(200).json({ success: true, data: power });
            } catch (error) {
                errorHandler(error, res);
            }
            break;
        default:
            /* Method not found */
            res.status(404).json({
                success: false,
                message: `Method not found for route: ${req.url}.`,
            });
            break;
    }
}
