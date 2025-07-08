import { Router } from 'express'

import * as db from '../dbFunctions/users.ts'

const router = Router()

router.get('/id/:id', async (req, res) => {
  const UserId = Number(req.params.id)

  try {
    const user = await db.getUserById(UserId)

    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing user ${UserId}`,
    })
  }
})

router.get('auth0/:sub', async (req, res) => {
  const Auth0Sub = String(req.params.sub)

  try {
    const user = await db.getUserByAuth0Sub(Auth0Sub)

    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Something went wrong grabbing user with Auth0Sub ${Auth0Sub}`,
    })
  }
})

export default router
