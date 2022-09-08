<<<<<<< HEAD
import mongoose from "mongoose";
=======
import mongoose from 'mongoose';
>>>>>>> 3c080bbcb9994c74405642f832c29b8f1982be55

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
<<<<<<< HEAD
    "Please define the MONGODB_URI environment variable inside .env.local"
=======
    'Please define the MONGODB_URI environment variable inside .env.local'
>>>>>>> 3c080bbcb9994c74405642f832c29b8f1982be55
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
