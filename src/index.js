import 'dotenv/config';
import './config/mongo';
import './config/express';

process.on('uncaughtException', error => {
  throw new Error(error, 'Uncaught exception');
});
