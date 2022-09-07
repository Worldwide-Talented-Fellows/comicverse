import mongoose from 'mongoose';

const PowerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Please provide a name for this power.'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this power.'],
  },
});

export default mongoose.models.Power || mongoose.model('Power', PowerSchema);
