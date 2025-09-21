import { ApiResponse } from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import User from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    throw new ApiError(400, 'All fields are required');
  }
  const user = await User.create({ fullname, email, password });
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  return new ApiResponse(201, {
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
    accessToken,
    refreshToken,
  }).send(res);
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, 'All fields are required').send(res);
  }
  const user = await User.findOne({ email });
  if (!user || !(await user.isPasswordCorrect(password))) {
    throw new ApiError(401, 'Invalid email or password').send(res);
  }
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  await user.save();
  return new ApiResponse(200, {
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
    accessToken,
    refreshToken,
  }).send(res);
});

export { registerUser, loginUser };
