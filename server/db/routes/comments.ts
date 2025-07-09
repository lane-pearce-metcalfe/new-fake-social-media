import { Router } from 'express'

import * as db from '../dbFunctions/comments.ts'
import { Comment } from '#models'

const router = Router()

router.get('/post/:id', async (req, res) => {
  const PostId = Number(req.params.id)

  try {
    const comments: Comment[] = await db.getCommentsOnPost(PostId)

    res.status(200).json(comments)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing comments on post ${PostId}`,
    })
  }
})

export default router
