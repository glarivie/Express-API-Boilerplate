import _ from 'lodash'

class DemoHelper {
  demoFunction = test =>
    new Promise((resolve, reject) =>
      _.isUndefined(test) ? reject('[Error] Empty "test"') : resolve({ test }),
    )
}

export {
  DemoHelper,
}
