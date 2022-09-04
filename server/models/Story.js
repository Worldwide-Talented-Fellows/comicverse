import mongoose from "mongoose";

const StorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this story."],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this story."],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Please provide an author for this story."],
    },
  },
  {
    /* Timestamps will automatically add createdAt and updatedAt fields to the documents. */
    timestamps: true,
  }
);

export default mongoose.models.Story || mongoose.model("Story", StorySchema);
