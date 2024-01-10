import { Express } from 'express';

import loginRoutes from './login.js';
import gameRoutes from './game.js';

export default (app: Express) => {
    app.use('/login', loginRoutes);
    app.use('/game', gameRoutes);
};
