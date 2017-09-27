import request from 'supertest'

import '../src/config/mongo'
import app from '../src/config/express'

describe('GET /', () => {
  test('HTTP status + Api is woriking fine !', async () => {
    const { statusCode, text } = await request(app).get('/')

    expect(statusCode).toBe(200)
    expect(text).toBe('Api is working fine !')
  })
})
