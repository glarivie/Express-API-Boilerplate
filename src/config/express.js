import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { log } from 'console'

import { is } from '../helpers'
import { main, api } from '../routes'

const { SERVER_PORT } = process.env
const app = express()

if (!is.test)
  app
    .use(morgan('dev')) // :method :url :status :response-time ms - :res[content-length]
    .use(cors()) // Enable Cross Origin Resource Sharing

app
  .use(bodyParser.json()) // Parse application/json
  .use(bodyParser.urlencoded({ extended: true })) // Parse application/x-www-form-urlencoded
  .use(helmet()) // Secure your app by setting various HTTP headers

app
  .disable('x-powered-by') // Disable 'X-Powered-By' header in response
  .disable('etag') // Remove No Cache Control

app
  .use('/api', main) // Main routes
  .use('/api/v1', api) // Api routes

app.listen(SERVER_PORT, () => {
  if (!is.test) log('[Express] Api is running on port', SERVER_PORT)
})

export default app
