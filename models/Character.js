import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this character."],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for this character."],
  },
  powers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Power",
  },
});

export default mongoose.models.Character ||
  mongoose.model("Character", CharacterSchema);
