import mongoose from 'mongoose';

const CartProductSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  variant: { type: String, default: null },
  subtotal: { type: Number, required: true },
});

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    products: [CartProductSchema],
    totalAmount: { type: Number, default: 0 },
    appliedCoupon: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model('Cart', CartSchema);
