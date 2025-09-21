import express from 'express';
const router = express.Router();

// Importing Controllers
import { loginUser, registerUser } from '../controllers/user.controller.js';

// Defining routes
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

export default router;
