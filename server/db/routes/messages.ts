import { Router } from 'express'

import * as db from '../dbFunctions/messages.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const ConversationId = Number(req.params.id)

  try {
    const messages = await db.getMessages(ConversationId)

    res.send(200).json(messages)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing messages from conversation ${ConversationId}`,
    })
  }
})

export default router
