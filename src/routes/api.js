import Joi from 'joi'
import { Router } from 'express'

import { validate } from '../middlewares'
import * as demoCtrl from '../controllers/demo'

const router = new Router()

const demoSchema = Joi.object().keys({
  test: Joi.string().required(),
})

/**
 * @param {String} query.test - test string
 * @return {String} - The query string as JSON
 */
router.get('/demo', validate(demoSchema, 'query'), demoCtrl.demo)

export default router
