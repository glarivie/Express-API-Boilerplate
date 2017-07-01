import 'babel-polyfill'
import 'dotenv/config'

import './config/mongo'
import './config/express'
import './config/passport'

process.on('uncaughtException', error => {
  throw new Error(error, 'Uncaught exception')
})
