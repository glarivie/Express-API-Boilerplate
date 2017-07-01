import mongoose from 'mongoose'
import paginate from 'mongoose-paginate'
import { log, error } from 'console'

import demoSchema from '../schemas/demoSchema'

mongoose.Promise = Promise

// const { DB_USER, DB_PORT, DB_PASSWORD, DB_HOST, DB_COLLECTION } = process.env

// Create mongo database connection
// mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_COLLECTION}`)

/* eslint-disable no-console */
mongoose.connection.on('connected', () => log('[MongoDB] Database is  connected'))
mongoose.connection.on('disconnected', () => error('[MongoDB] Database is disconnected'))
/* eslint-enable no-console */

demoSchema.plugin(paginate)
mongoose.model('Demo', demoSchema)
