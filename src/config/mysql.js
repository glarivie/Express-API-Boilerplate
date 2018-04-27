import knex from 'knex'
import { log } from 'console'

const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_CHARSET,
  NODE_ENV,
} = process.env

const db = knex({
  client: 'mysql', // Leave mysql client even for MariaDB
  connection: {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    charset: MYSQL_CHARSET,
  },
})

// Run a dummy query to check database connection
db.raw('select 1 + 1 as result').then(() => {
  if (NODE_ENV !== 'test') log(`[MariaDB] Database connected on port ${MYSQL_PORT}`)
})

export default db
