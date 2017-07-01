import express from 'express'
import passport from 'passport'

import * as demoController from '../controllers/demo'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Api is working fine !')
})

router.get('/api/demo', demoController.demo)

router.post(
  '/login',
  passport.authenticate('jwt', { session: false }),
  ({ headers, user }, res) => {
    res.status(200).send({
      status: 200,
      response: 'Authorization granted !',
      headers,
      user,
    })
  },
)

export default router
