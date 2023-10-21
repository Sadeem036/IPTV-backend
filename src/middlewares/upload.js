import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const destinationDirectory = path.join(__dirname, '../public');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationDirectory);
    },
    filename: (req, file, cb) => {
        const fileName =
            path
                .basename(file.originalname, path.extname(file.originalname))
                .toLowerCase()
                .replace(/\s+/g, "-") +
            "-" +
            Date.now().toString() +
            path.extname(file.originalname).toLowerCase();
        cb(null, fileName);
    },
});

export default multer({ storage });