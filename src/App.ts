import * as express from 'express';
import Router from './router/Router';

export default class App {
  static getInstance(): express.Application {
    const app: express.Application = express();

    Router.injectTo(app);

    return app;
  }
}
