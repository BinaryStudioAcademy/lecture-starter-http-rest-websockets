import { Router } from "express";
import path from "node:path";

import { HTML_FILES_PATH } from "../config.js";

const router = Router();

router.get("/", (_request, response) => {
    const page = path.join(HTML_FILES_PATH, "signin.html");
    response.sendFile(page);
});

export { router };
