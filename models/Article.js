import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this article."],
    },
    content: {
      type: String,
      required: [true, "Please provide a content for this article."],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Please provide an author for this article."],
    },
  },
  {
    /* Timestamps will automatically add createdAt and updatedAt fields to the documents. */
    timestamps: true,
  }
);

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
