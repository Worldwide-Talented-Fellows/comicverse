import { DEFAULT_LIMIT } from "../constants/search";

export async function getLimitAndSkip(limit, page) {
    page = page * 1 || 1;
    limit = limit * 1 || DEFAULT_LIMIT;
    const skip = (page - 1) * limit;
    return {
        limit,
        skip
    }
}