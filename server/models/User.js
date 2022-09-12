import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email.'],
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'writer', 'user'],
    default: 'user',
  },
  emailVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  unlockedPowers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Power',
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
