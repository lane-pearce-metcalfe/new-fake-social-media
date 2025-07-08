import { Router } from 'express'

import * as db from '../dbFunctions/conversations.ts'

const router = Router()

router.get('/all', async (req, res) => {
  try {
    const conversations = await db.getAllConversations()

    res.status(200).json(conversations)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing all conversations`,
    })
  }
})

export default router
