import Joi from 'joi'
import express from 'express'

import { validate } from 'middlewares'
import * as demoCtrl from 'controllers/demo'

const router = express.Router()

const demoSchema = Joi.object().keys({
  test: Joi.string().required(),
})

// {req.query}: "test"[String](required)
router
  .get('/demo', validate(demoSchema, 'query'), demoCtrl.demo)

export default router
