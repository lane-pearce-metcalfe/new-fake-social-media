import { Router } from 'express'

import * as db from '../dbFunctions/mentions.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const PostId = Number(req.params.id)

  try {
    const mentions = await db.getMentionsOnPost(PostId)

    res.send(200).json(mentions)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing mentions on post ${PostId}`,
    })
  }
})

export default router
