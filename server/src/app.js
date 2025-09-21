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

// Importing Routes
import userRouter from './routes/user.routes.js';
import { uploadOnCloudinary } from './utils/cloudinary.js';
import { upload } from './utils/multer.js';

//Using Routes
app.get('/', (req, res) => {
  throw new ApiError(400, 'This is not for client use :)').send(res);
});
app.use('/api/v1/users', userRouter);

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const localFilePath = req.file?.path;
    const result = await uploadOnCloudinary(localFilePath);

    if (!result) {
      return res.status(500).json({ message: 'Upload failed' });
    }

    res.json({
      message: 'Uploaded successfully',
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export { app };
