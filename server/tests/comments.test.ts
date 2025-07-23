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

describe('Getting comments from a post', () => {
  it('Gets comment from post with Id 1', async () => {
    const res = await request(server).get(`/api/v1/comments/post/1`)

    expect(res.body).toMatchInlineSnapshot(`
[
  {
    "Comment": "I would love to go to Canada one day!",
    "Id": 1,
    "PostId": 1,
    "SentAt": "2024-06-10T08:30:00Z",
    "UserId": 1,
  },
  {
    "Comment": "Loving the snow!",
    "Id": 2,
    "PostId": 1,
    "SentAt": "2024-06-10T08:45:00Z",
    "UserId": 2,
  },
]`)
  })
})
