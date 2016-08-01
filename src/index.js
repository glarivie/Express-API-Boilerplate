import 'babel-polyfill';
import './config/mongo.js';
import './config/express.js';

process.on('uncaughtException', error => {
  throw new Error(error, 'Uncaught exception');
});

console.log('Server is running...');
