import { createServer, Server } from 'http';
import App from './App';

export default class ServerClass {
  static instance: Server = null;

  static init() {
    if (!ServerClass.instance) {
      const port: number = 8443;

      ServerClass.instance = createServer(App.getInstance());
  
      ServerClass.instance.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
      });
    }
  }
}
