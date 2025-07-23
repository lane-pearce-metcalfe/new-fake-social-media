import express from 'express'
import * as Path from 'node:path'

import {
  commentRoutes,
  conversationParticipantRoutes,
  conversationRoutes,
  followRoutes,
  likeRoutes,
  mentionRoutes,
  messageReactionRoutes,
  messageRoutes,
  postRoutes,
  userProfileRoutes,
  userRoutes,
  userSettingRoutes,
} from './db/routes/index.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/comments', commentRoutes)
server.use('/api/v1/conversationParticipants', conversationParticipantRoutes)
server.use('/api/v1/conversations', conversationRoutes)
server.use('/api/v1/follows', followRoutes)
server.use('/api/v1/likes', likeRoutes)
server.use('/api/v1/mentions', mentionRoutes)
server.use('/api/v1/messageReactions', messageReactionRoutes)
server.use('/api/v1/messages', messageRoutes)
server.use('/api/v1/posts', postRoutes)
server.use('/api/v1/userProfiles', userProfileRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/userSettings', userSettingRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
