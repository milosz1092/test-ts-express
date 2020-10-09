import * as express from 'express';
import Router from './router/Router';

export default class App {
  static getInstance(port: number): express.Application {
    const app: express.Application = express();

    // app.use();

    Router.injectTo(app);

    app.set('port', port);

    return app;
  }
}
