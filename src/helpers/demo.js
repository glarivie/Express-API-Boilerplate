import _ from 'lodash'

const demo = test =>
  new Promise((resolve, reject) =>
    _.isUndefined(test) ? reject('[Error] Empty "test"') : resolve({ test }),
  )

export {
  demo,
}
