import dotenv from 'dotenv';
dotenv.config();
import { app } from './app.js';
import { connectDB } from './db/config.js';
const PORT = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('⚙️  Server running on PORT : ' + PORT);
  });
});
