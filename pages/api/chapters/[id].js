import getAuthenticatedUser from "../../../server/helpers/auth/token";
import { NotFoundError } from "../../../server/helpers/errors";
import dbConnect from "../../../server/lib/dbConnect";
import Chapter from '../../../server/models/Chapter';


export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    await dbConnect();

    const session = await getAuthenticatedUser(req);

    switch (method) {
        case 'GET_CHAPTER':
            try {
                const chapter = await Chapter.findById(id);
                if (!chapter) {
                    throw new NotFoundError('This chapter does not exist');
                }
            
            } catch (error) {
                
            }
            break;
    
        default:
            break;
    }
}