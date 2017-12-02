import Joi from 'joi'
import _ from 'lodash'

const validate = (schema, key = 'query') => (req, res, next) => {
  const { error } = Joi.validate(req[key], schema)

  if (error) // 400 Bad Request
    return res.status(400).send(_.head(error.details).message)

  return next()
}

export default validate
