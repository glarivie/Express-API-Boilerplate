const { NODE_ENV } = process.env

const is = {
  development: Object.is(NODE_ENV, 'development'),
  test: Object.is(NODE_ENV, 'test'),
  production: Object.is(NODE_ENV, 'production'),
}

export default is
