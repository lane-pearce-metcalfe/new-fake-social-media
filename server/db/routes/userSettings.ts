import { Router } from 'express'

import * as db from '../dbFunctions/userSettings.ts'

const router = Router()

router.get('/theme/:id', async (req, res) => {
  const UserId = Number(req.params.id)

  try {
    const theme = await db.getUsersTheme(UserId)

    res.send(200).json(theme)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing user ${UserId}'s theme`,
    })
  }
})

export default router
