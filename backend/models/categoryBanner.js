import mongoose from 'mongoose';

const categoryBannner = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    link_title: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Bannner = mongoose.model('categorySchema', categoryBannner);

export default Bannner;
