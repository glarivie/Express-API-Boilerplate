import { error } from 'console'

import { DemoHelper } from '../helpers/demo'

class DemoController extends DemoHelper {
  errorHandler = (res, err, message) => {
    error(err)
    return res.status(500).send(message)
  }

  demo = async (req, res) => {
    try {
      const { test } = req.query
      const response = await this.demoFunction(test)

      return res.status(200).json(response)
    } catch (e) {
      return this.errorHandler(res, e, 'Error on demo controller')
    }
  }
}

export {
  DemoController,
}
