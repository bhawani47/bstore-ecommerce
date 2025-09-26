import User from '../models/user.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';

const authUser = asyncHandler(async (req, res, next) => {
  let token = req.cookies?.token;
  if (!token && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }
  const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  req.user = await User.findById(user._id).select('-password -refreshToken');
  next();
});

export { authUser };
