import { Router } from 'express'

import * as db from '../dbFunctions/messages.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const ConversationId = Number(req.params.id)

  try {
    const messages = await db.getMessages(ConversationId)

    res.status(200).json(messages)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing messages from conversation ${ConversationId}`,
    })
  }
})

router.post('/', async (req, res) => {
  const message = req.body
  try {
    await db.addMessage(message)

    res.status(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong adding message}`,
    })
  }
})

export default router
