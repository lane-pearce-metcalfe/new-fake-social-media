import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'

import connection from '../db/connection.ts'
import server from '../server.ts'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('Adding a user', () => {
  const userData = {
    UserName: 'Testing Username',
    FullName: 'Testing Fullname',
    Email: 'testing@gmail.com',
    PfpUrl:
      'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
    UserSince: new Date().toISOString(),
    Auth0Sub: 'auth0|test123',
  }

  it('should add a user successfully', async () => {
    const res = await request(server).post('/api/v1/users').send(userData)

    expect(res.status).toBe(200)
  })

  it('should fail adding a user due to missing auth0sub', async () => {
    const res = await request(server)
      .post(`/api/v1/users`)
      .send({ ...userData, Auth0Sub: null })

    expect(res.status).toBe(400)
  })

  it('should fail adding a user to missing email', async () => {
    const res = await request(server)
      .post(`/api/v1/users`)
      .send({ ...userData, Email: null })

    expect(res.status).toBe(400)
  })

  it('should reject a invalid email format (doesnt include an "@")', async () => {
    const res = await request(server)
      .post(`/api/v1/users`)
      .send({ ...userData, Email: 'testemail.com' })

    expect(res.status).toBe(400)
  })

  it('should reject an invalid email format (not enough characters)', async () => {
    const res = await request(server)
      .post(`/api/v1/users`)
      .send({ ...userData, Email: '@g.co' })

    expect(res.status).toBe(400)
  })

  it('should accept minimum valid email length', async () => {
    const res = await request(server)
      .post(`/api/v1/users`)
      .send({ ...userData, Email: '21@g.co' })

    expect(res.status).toBe(200)
  })
})
