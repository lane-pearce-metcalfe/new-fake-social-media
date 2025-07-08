import { Router } from 'express'

import * as db from '../dbFunctions/posts.ts'

const router = Router()

router.get('/user/:id', async (req, res) => {
  const UserId = Number(req.params.id)

  try {
    const posts = await db.getPostsFromUser(UserId)
    res.status(200).json(posts)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: `Something went wrong grabbing user ${UserId}'s posts` })
  }
})

router.get('/post/:id', async (req, res) => {
  const PostId = Number(req.params.id)

  try {
    const post = await db.getPostById(PostId)

    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: `Something went wrong grabbing post ${PostId}` })
  }
})

router.get('/all', async (req, res) => {
  try {
    const posts = await db.getAllPosts()

    res.status(200).json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `Something went wrong grabbing all posts` })
  }
})

export default router
