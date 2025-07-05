import { Router } from 'express'

import * as db from '../dbFunctions/messageReactions.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const MessageId = Number(req.params.id)

  try {
    const reactions = await db.getMessageReactions(MessageId)

    res.send(200).json(reactions)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing reactions for message ${MessageId}`,
    })
  }
})

export default router
