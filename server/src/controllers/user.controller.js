import asyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import User from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

// ---------------- Register ----------------
const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password)
    throw new ApiError(400, 'All fields are required');

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new ApiError(400, 'User already exists');

  const user = await User.create({ fullname, email, password });

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  await user.save();

  res.cookie('token', accessToken);
  return new ApiResponse(201, {
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
    accessToken,
    refreshToken,
  }).send(res);
});

// ---------------- Login ----------------
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ApiError(400, 'All fields are required');

  const user = await User.findOne({ email });
  if (!user || !(await user.isPasswordCorrect(password)))
    throw new ApiError(401, 'Invalid email or password');

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  await user.save();

  res.cookie('token', accessToken);
  return new ApiResponse(200, {
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
    accessToken,
    refreshToken,
  }).send(res);
});

// ---------------- Get User Profile ----------------
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select(
    '-password -refreshToken'
  );
  if (!user) throw new ApiError(404, 'User not found');
  return new ApiResponse(200, user).send(res);
});

// ---------------- Update Profile (info + notification + avatar) ----------------
const updateUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const updates = {};

  // Update avatar if file uploaded
  if (req.file) {
    const result = await uploadOnCloudinary(req.file.path);
    if (!result) throw new ApiError(500, 'Cloudinary upload failed');
    updates.profilePic = result.secure_url;
  }

  // Update other fields
  const allowedFields = [
    'fullname',
    'phoneNumber',
    'language',
    'currency',
    'newsletterSubscribed',
    'notificationPreferences',
    'addresses',
  ];

  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) updates[field] = req.body[field];
  });

  const user = await User.findByIdAndUpdate(userId, updates, {
    new: true,
  }).select('-password -refreshToken');
  if (!user) throw new ApiError(404, 'User not found');

  return new ApiResponse(200, user).send(res);
});

// ---------------- Update Password ----------------
const updatePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    throw new ApiError(400, 'Both old and new password are required');

  const user = await User.findById(req.user._id);
  if (!user) throw new ApiError(404, 'User not found');

  const isCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isCorrect) throw new ApiError(401, 'Old password is incorrect');

  user.password = newPassword;
  await user.save();

  return new ApiResponse(200, {
    message: 'Password updated successfully',
  }).send(res);
});

// ---------------- Logout ----------------
const logoutUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.refreshToken = null;
    await user.save();
  }
  res.clearCookie('token');
  return new ApiResponse(200, { message: 'Logged out successfully' }).send(res);
});

export {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  updatePassword,
  logoutUser,
};
