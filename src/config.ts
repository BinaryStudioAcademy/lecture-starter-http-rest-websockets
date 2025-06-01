import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATIC_PATH = path.join(__dirname, "..", "public");
const HTML_FILES_PATH = path.join(STATIC_PATH, "html");
const PORT = 3001;

export { HTML_FILES_PATH, PORT, STATIC_PATH };
