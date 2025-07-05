import { Router } from 'express'

import * as db from '../dbFunctions/follows.ts'

const router = Router()

router.get('/following/:id', async (req, res) => {
  const UserId = Number(req.params.id)

  try {
    const following = await db.getUsersFollowing(UserId)

    res.send(200).json(following)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing the accounts user ${UserId} follows`,
    })
  }
})

export default router
