import { Router } from 'express'

import * as db from '../dbFunctions/posts.ts'

const router = Router()

router.get('/user/:id', async (req, res) => {
  const UserId = Number(req.params.id)

  try {
    const posts = await db.getPostsFromUser(UserId)

    res.send(200).json(posts)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: `Something went wrong grabbing user ${UserId}'s posts` })
  }
})

export default router
