import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const STATIC_PATH = path.join(__dirname, '..', 'public');
export const HTML_FILES_PATH = path.join(STATIC_PATH, 'html');

export const PORT = 3333;
