import mongoose from 'mongoose';

const OrderProductSchema = new mongoose.Schema({
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

const OrderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: [
        'pending',
        'confirmed',
        'shipped',
        'delivered',
        'canceled',
        'returned',
      ],
      default: 'pending',
    },
    orderDate: { type: Date, default: Date.now },
    deliveryDate: { type: Date, default: null },

    products: [OrderProductSchema],

    // Pricing
    subtotal: { type: Number, required: true },
    tax: { type: Number, default: 0 },
    shippingCharges: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },

    // Payment Info
    paymentMethod: { type: String, required: true },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    transactionId: { type: String, default: null },

    // Shipping Info
    shippingAddress: {
      fullName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: { type: String, default: null },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    shippingMethod: {
      type: String,
      enum: ['standard', 'express', 'freight'],
      default: 'standard',
    },
    trackingNumber: { type: String, default: null },
    deliveryStatus: { type: String, default: 'pending' },

    // Extras
    notes: { type: String, default: null },
    gift: { type: Boolean, default: false },
    giftMessage: { type: String, default: null },
    orderLogs: [
      {
        status: String,
        updatedAt: { type: Date, default: Date.now },
        note: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
