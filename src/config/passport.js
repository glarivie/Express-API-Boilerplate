import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { log } from 'console'

const { JWT_SECRET } = process.env

const options = {
  secretOrKey: JWT_SECRET,
  /* JWT Token must be sent from headers on authorization field */
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  algorithms: 'HS256', // Optionnal (HS256 is set by default)
}

passport.use(new Strategy(options, (payload, done) => {
  log(payload) // Decoded JWT Token

  if (!payload) {
    return done(null, false)
  }

  return done(null, payload)
}))
