import { error } from 'console'

import * as demoHelper from '../helpers/demo'

const demo = async (req, res) => {
  try {
    const { test } = req.query
    const response = await demoHelper.demo(test)

    return res.status(200).json(response)
  } catch (e) {
    error(e)
    return res.status(500).send('Error on demo controller')
  }
}

export {
  demo,
}
