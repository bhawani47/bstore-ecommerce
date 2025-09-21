import multer from 'multer';
import path from 'path';

// Ensure uploads are saved in a stable folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'public/temp'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

console.log(storage);

export { storage };

export const upload = multer({ storage });
