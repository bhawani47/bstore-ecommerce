import mongoose from 'mongoose';

const VariantSchema = new mongoose.Schema({
  optionName: { type: String, required: true }, // e.g., "Size", "Color"
  optionValues: [{ type: String, required: true }], // e.g., ["S", "M", "L"] or ["Red", "Blue"]
  priceAdjustment: { type: Number, default: 0 }, // additional price for this variant
  stock: { type: Number, default: 0 },
  sku: { type: String, default: null },
});

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: { type: String, required: true },
    shortDescription: { type: String, default: null },
    brand: { type: String, default: null },
    sku: { type: String, unique: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    tags: [{ type: String }],

    // Pricing
    price: { type: Number, required: true },
    discountPrice: { type: Number, default: null },
    currency: { type: String, default: 'INR' },
    tax: { type: Number, default: 0 }, // percentage
    isOnSale: { type: Boolean, default: false },

    // Stock & Inventory
    stockQuantity: { type: Number, default: 0 },
    isInStock: { type: Boolean, default: true },
    lowStockThreshold: { type: Number, default: 5 },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
      default: null,
    },
    warehouseLocation: { type: String, default: null },

    // Variants
    variants: [VariantSchema],

    // Media
    images: [{ type: String }],
    videos: [{ type: String }],
    thumbnail: { type: String, default: null },

    // Ratings & Reviews
    averageRating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],

    // SEO & Marketing
    metaTitle: { type: String, default: null },
    metaDescription: { type: String, default: null },
    keywords: [{ type: String }],
    featured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },

    // Shipping / Dimensions
    weight: { type: Number, default: 0 },
    dimensions: {
      length: { type: Number, default: 0 },
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 },
    },
    shippingClass: {
      type: String,
      enum: ['standard', 'express', 'freight'],
      default: 'standard',
    },

    views: { type: Number, default: 0 },
    purchases: { type: Number, default: 0 },
    wishlistCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
