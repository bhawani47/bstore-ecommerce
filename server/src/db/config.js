import { DB_NAME } from '../constants.js';
import asyncHandler from '../utils/asyncHandler.js';
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connResponse = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      'MongoDB Connected successfully with : ' + connResponse.connection.host
    );
  } catch (error) {
    console.log('MONGODB connection FAILED ', error);
    process.exit(1);
  }
};
