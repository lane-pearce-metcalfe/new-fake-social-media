import { Router } from 'express'

import * as db from '../dbFunctions/conversationParticipants.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const ConversationId = Number(req.params.id)

  try {
    const participants = await db.getConversationParticipants(ConversationId)

    res.status(200).json(participants)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing participants from conversation ${ConversationId}`,
    })
  }
})

export default router
