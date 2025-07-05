import { Router } from 'express'

import * as db from '../dbFunctions/likes.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const PostId = Number(req.params.id)

  try {
    const likes = await db.getAmountOfLikes(PostId)

    res.send(200).json(likes)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing all likes for post ${PostId}`,
    })
  }
})

export default router
