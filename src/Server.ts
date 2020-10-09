import { createServer, Server } from 'http';
import App from './App';

export default class ServerClass {
  static instance: Server = null;

  static init() {
    const port: number = 8080;
    const app = App.getInstance(port);

    ServerClass.instance = createServer(app);

    ServerClass.instance.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  }
}
