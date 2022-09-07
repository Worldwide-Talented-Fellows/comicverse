import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
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