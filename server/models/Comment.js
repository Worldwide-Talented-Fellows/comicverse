import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Please provide a content for this comment.'],
    },
    chapter: {
      type: mongoose.Schema.ObjectId,
      ref: 'Chapter',
      required: [true, 'Please provide a chapter for this comment.'],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Please provide an author for this comment.'],
    },
  },
  {
    /* Timestamps will automatically add createdAt and updatedAt fields to the documents. */
    timestamps: true,
  }
);

export default mongoose.models.Comment ||
  mongoose.model('Comment', CommentSchema);
