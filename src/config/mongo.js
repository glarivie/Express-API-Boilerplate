import mongoose from 'mongoose'
import { log, error } from 'console'

import demoSchema from '../schemas/demoSchema'

// const { DB_USER, DB_PORT, DB_PASSWORD, DB_HOST, DB_COLLECTION } = process.env
// const options = {
//   useMongoClient: true,
//   promiseLibrary: Promise,
// }

// Create mongo database connection
// mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_COLLECTION}`, options)

/* eslint-disable no-console */
mongoose.connection.on('connected', () => log('[MongoDB] Database is  connected'))
mongoose.connection.on('disconnected', () => error('[MongoDB] Database is disconnected'))
/* eslint-enable no-console */

mongoose.model('Demo', demoSchema)
