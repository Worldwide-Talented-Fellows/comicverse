import mongoose from 'mongoose';

const ChapterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for this chapter.'],
    },
    content: {
      type: String,
      required: [true, 'Please provide a content for this chapter.'],
    },
    story: {
      type: mongoose.Schema.ObjectId,
      ref: 'Story',
      required: [true, 'Please provide a story for this chapter.'],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Please provide an author for this chapter.'],
    },
  },
  {
    /* Timestamps will automatically add createdAt and updatedAt fields to the documents. */
    timestamps: true,
  }
);

export default mongoose.models.Chapter ||
  mongoose.model('Chapter', ChapterSchema);
