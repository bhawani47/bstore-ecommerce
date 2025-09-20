import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ApiError } from './utils/ApiError.js';

const app = express();

// Improtant Middlwares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(express.static('public'));
app.use(cookieParser());

// Main Routes
app.get('/', (req, res) => {
  throw new ApiError(401, 'Unauthorized').send(res);
});

export { app };
