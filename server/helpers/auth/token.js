import { getToken } from 'next-auth/jwt';
import { authOptions } from '../../../pages/api/auth/[...nextauth]';

export default async function getAuthenticatedUser(req) {
    const token = await getToken({ req });
    return token;
}
