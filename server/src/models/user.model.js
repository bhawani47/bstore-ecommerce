import mongoose from 'mongoose';
import bcyrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, 'Please enter full name'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    profilePic: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    passwordResetToken: {
      type: String,
      default: null,
    },
    twoFactorEnabled: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'seller'],
      default: 'user',
    },
    accountStatus: {
      type: String,
      enum: ['active', 'unverified', 'blocked'],
      default: 'unverified',
    },
    addresses: [
      {
        addressLine1: {
          type: String,
          required: true,
        },
        addressLine2: {
          type: String,
          default: null,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        postalCode: {
          type: String,
          required: true,
        },
        isDefault: {
          type: Boolean,
          default: false,
        },
      },
    ],
    language: {
      type: String,
      default: 'en',
    },
    currency: {
      type: String,
      default: 'INR',
    },
    newsletterSubscribed: {
      type: Boolean,
      default: false,
    },
    notificationPreferences: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
      push: { type: Boolean, default: true },
    },
    loginHistory: [
      {
        device: String,
        ip: String,
        loginAt: { type: Date, default: Date.now },
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
    membershipTier: {
      type: String,
      enum: ['bronze', 'silver', 'gold', 'platinum'],
      default: 'bronze',
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.password.isModified) return next();
  await bcyrpt.hash(this.password, 10);
  next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcyrpt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      fullname: this.fullname,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
UserSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export default mongoose.model('User', UserSchema);
