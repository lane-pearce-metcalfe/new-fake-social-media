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
  it('should add a user successfully', async () => {
    const userData = {
      UserName: 'Testing Username',
      FullName: 'Testing Fullname',
      Email: 'testing@gmail.com',
      PfpUrl:
        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
      UserSince: new Date().toISOString(),
      Auth0Sub: 'auth0|test123',
    }

    const res = await request(server).post('/api/v1/users').send(userData)

    expect(res.status).toBe(200)
  })

  it('should fail adding a user due to missing auth0sub', async () => {
    const userData = {
      UserName: 'Testing Username',
      FullName: 'Testing Fullname',
      Email: 'testing@gmail.com',
      PfpUrl:
        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
      UserSince: new Date().toISOString(),
    }

    const res = await request(server).post(`/api/v1/users`).send(userData)

    console.log(res.status)

    expect(res.status).toBe(400)
  })

  it('should fail adding a user to missing email', async () => {
    const userData = {
      UserName: 'Testing Username',
      FullName: 'Testing Fullname',
      PfpUrl:
        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
      UserSince: new Date().toISOString(),
      Auth0Sub: 'auth0|test123',
    }

    const res = await request(server).post(`/api/v1/users`).send(userData)

    console.log(res.status)

    expect(res.status).toBe(400)
  })
})
