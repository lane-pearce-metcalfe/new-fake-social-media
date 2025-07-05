import { Router } from 'express'

import * as db from '../dbFunctions/comments.ts'

const router = Router()

router.get('/post/:id', async (req, res) => {
  const PostId = Number(req.params.id)

  try {
    const comments = await db.getCommentsOnPost(PostId)

    res.send(200).json(comments)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing comments on post ${PostId}`,
    })
  }
})

export default router
