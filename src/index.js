import 'babel-polyfill';
import './config/mongo.js';
import './config/express.js';

process.on('uncaughtException', error => {
  throw new Error(error, 'Uncaught exception');
});
/* eslint-disable no-console */
console.log('Server is running...');
/* eslint-enable no-console */
