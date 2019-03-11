import Server from './web.server';

const webserver = new Server();
webserver.start(() => {
  console.log('Webserver started!');
});
