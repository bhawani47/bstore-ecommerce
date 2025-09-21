import User from '../models/user.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';

const authUser = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;
  const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  req.user = await User.findById(user._id).select('-password -refreshToken');
  next();
});

export { authUser };
