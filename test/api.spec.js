import 'dotenv/config'
import request from 'supertest'

import '../src/config/mongo'
import app from '../src/config/express'

describe('GET /api', () => {
  test('HTTP status + Api is working fine !', async () => {
    const { statusCode, text } = await request(app).get('/api')

    expect(statusCode).toBe(200)
    expect(text).toBe('Api is working fine !')
  })
})

describe('GET /api/v1', () => {
  test('Should return 404 Not Found', async () => {
    const { statusCode } = await request(app).get('/api/v1')

    expect(statusCode).toBe(404)
  })
})

describe('GET /api/v1/demo', () => {
  test('Should return 400 and ask for "test" query param', async () => {
    const { statusCode, text } = await request(app).get('/api/v1/demo')

    expect(statusCode).toBe(400)
    expect(text).toBe('"test" is required')
  })

  test('Should return 400 and ask to fulfill "test"', async () => {
    const { statusCode, text } = await request(app).get('/api/v1/demo?test=')

    expect(statusCode).toBe(400)
    expect(text).toBe('"test" is not allowed to be empty')
  })

  test('Should return 200 with fulfilled "test"', async () => {
    const { statusCode, body } = await request(app).get('/api/v1/demo?test=hello')

    expect(statusCode).toBe(200)
    expect(body).toEqual({ test: 'hello' })
  })
})
