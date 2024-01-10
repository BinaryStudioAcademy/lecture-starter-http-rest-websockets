import path from 'node:path';
import { Router } from 'express';

import { HTML_FILES_PATH } from '../config.js';

const router = Router();

router.get('/', (req, res) => {
    const page = path.join(HTML_FILES_PATH, 'game.html');
    res.sendFile(page);
});

export default router;
