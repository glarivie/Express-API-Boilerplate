import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'
import { log } from 'console'

import { main, api } from '../routes'

const { SERVER_PORT } = process.env

const app = express()

app
  .use(morgan('dev')) // :method :url :status :response-time ms - :res[content-length]
  .use(cookieParser())
  .use(bodyParser.json()) // Parse application/json
  .use(bodyParser.urlencoded({ extended: true })) // Parse application/x-www-form-urlencoded
  .use(cors()) // Enable Cross Origin Resource Sharing
  .use(helmet()) // Secure your app by setting various HTTP headers
  .use(passport.initialize()) // initialize passport middleware

app
  .disable('x-powered-by') // Disable 'X-Powered-By' header in response
  .disable('etag') // Remove No Cache Control

app
  .use('/', main) // Main routes
  .use('/api', api) // Api routes

app.listen(SERVER_PORT, () =>
  log('[Express] Api is running on port', SERVER_PORT),
)
