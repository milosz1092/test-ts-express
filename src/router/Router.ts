import * as express from 'express';
import testRouting from './route/test.route';

export default class Router {
  static injectTo(app: express.Application) {
    app.use((req, res, next) => {
      res.header('content-type', 'application/json');
      next();
    });

    app.use('/api/v1', testRouting);
  }
}
