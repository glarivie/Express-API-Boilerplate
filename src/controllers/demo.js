import { error } from 'console'
import _ from 'lodash'

import * as demoHlpr from 'helpers/demo'

const errorHandler = (res, e) => {
  error(e) // Display full error stack
  return res.status(500).json(JSON.parse(_.get(e, 'message', {})))
}

const ctrlWrapper = callback => (req, res) =>
  new Promise((resolve, reject) =>
    callback(req)
      .then(response => resolve(res.status(200).json(response)))
      .catch(err => reject(errorHandler(res, err))),
  )

const demo = ctrlWrapper(({ query: { test } }) => demoHlpr.demoFunction(test))

export {
  demo,
}
