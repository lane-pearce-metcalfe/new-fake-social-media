import { Router } from 'express'

import * as db from '../dbFunctions/follows.ts'

const router = Router()

router.get('/following/:id', async (req, res) => {
  const UserId = Number(req.params.id)

  try {
    const following = await db.getUsersFollowing(UserId)

    res.status(200).json(following)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing the accounts user ${UserId} follows`,
    })
  }
})

router.get('/followers/:id', async (req, res) => {
  const UserId = Number(req.params.id)

  try {
    const followers = await db.getUsersFollowers(UserId)

    res.status(200).json(followers)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing the accounts that follow user ${UserId}`,
    })
  }
})

export default router
