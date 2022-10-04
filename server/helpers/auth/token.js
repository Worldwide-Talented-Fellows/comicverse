import { getToken } from 'next-auth/jwt';

export default async function getAuthenticatedUser(req) {
    const token = await getToken({ req });
    return token;
}
