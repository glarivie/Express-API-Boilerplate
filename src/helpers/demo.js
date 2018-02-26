// @flow
// import _ from 'lodash'

const demoFunction = (test: ?string): Promise<{}> =>
  new Promise(resolve => resolve({ test }))

export {
  demoFunction,
}
