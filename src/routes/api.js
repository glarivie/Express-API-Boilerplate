import Joi from 'joi'
import express from 'express'
import passport from 'passport'

import { validate } from '../middlewares'
import { DemoController } from '../controllers/demo'

const router = express.Router()
const demoController = new DemoController()

const demoSchema = Joi.object().keys({
  test: Joi.string().required(),
})

// {req.query}: "test"[String](required)
router
  .get('/demo', validate(demoSchema, 'query'), demoController.demo)

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
