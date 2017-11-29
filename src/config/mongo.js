// import mongoose from 'mongoose'
// import { log, error } from 'console'

// import demoSchema from '../schemas/demoSchema'

// const { DB_USER, DB_PORT, DB_PASSWORD, DB_HOST, DB_COLLECTION } = process.env
// const options = {
//   useMongoClient: true,
//   promiseLibrary: Promise,
// }

// Create mongo database connection
// mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_COLLECTION}`, options)

// mongoose.connection.on('connected', () => log('[MongoDB] is connected on port', DB_PORT))
// mongoose.connection.on('disconnected', () => error('[MongoDB] is disconnected'))


// mongoose.model('Demo', demoSchema)
