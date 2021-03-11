import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import NaversRouter from './routes/navers.routes';
import ProjectsRouter from './routes/projects.routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  };

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(errors());
  };

  routes() {
    this.app.use('/navers', NaversRouter);
    this.app.use('/projects', ProjectsRouter);
  };
};

export default new App().app;