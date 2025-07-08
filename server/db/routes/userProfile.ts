import { Router } from 'express'

import * as db from '../dbFunctions/userProfile.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const UserId = Number(req.params.id)

  try {
    const profileInfo = await db.getUsersProfileInfo(UserId)

    res.status(200).json(profileInfo)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing profile into for user ${UserId}`,
    })
  }
})

export default router
