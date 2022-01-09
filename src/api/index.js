const { config } = require('./config/config');
const { app } = require('./app');

app
  .listen(config.api.port)
  .on('listening', () => console.log(`Api ready in port ${config.api.port}`))
  .once('error', (error) => {
    console.error(error, 'Shutting down server');
    process.exit(1);
  });
