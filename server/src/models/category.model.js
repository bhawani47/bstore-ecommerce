import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter category name'],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      default: null,
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
    level: {
      type: Number,
      default: 1,
    },
    image: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    displayOrder: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    // SEO fields
    metaTitle: {
      type: String,
      default: null,
    },
    metaDescription: {
      type: String,
      default: null,
    },
    keywords: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    // Optional analytics
    productCount: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Category', CategorySchema);
