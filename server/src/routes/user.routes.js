import express from 'express';
const router = express.Router();

// Importing Controllers
import {
  loginUser,
  registerUser,
  updateUserProfile,
  updatePassword,
  getUserProfile,
} from '../controllers/user.controller.js';
import { upload } from '../utils/multer.js';
import { authUser } from '../middlewares/auth.middlware.js';

// Defining routes
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.post(
  '/update',
  authUser, // your auth middleware
  upload.single('avatar'),
  updateUserProfile
);
router.route('/user').get(authUser, getUserProfile);

export default router;
