import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import { log, error } from 'console';

import router from '../routes/main';

const app = express();
const { SERVER_PORT } = process.env;

app
  .use(morgan('dev')) // :method :url :status :response-time ms - :res[content-length]
  .use(cookieParser())
  .use(bodyParser.json()) // Parse application/json
  .use(bodyParser.urlencoded({ extended: true })) // Parse application/x-www-form-urlencoded
  .use(cors()) // Enable Cross Origin Resource Sharing
  .use(helmet()) // Secure your app by setting various HTTP headers
  .use(passport.initialize()); // initialize passport middleware

app
  .disable('x-powered-by') // Disable 'X-Powered-By' header in response
  .disable('etag'); // Remove No Cache Control

app.use('/', router); // Routes

// Error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  error(err, 'Handled error')
  return res.status(500).send(error.message)
});

app.listen(SERVER_PORT, () =>
  log(`[Express] Api is running on port ${SERVER_PORT}`)
);
