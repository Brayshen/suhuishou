const express = require('express')
const server = express()
const userRouter = require('./routes/user')

// 中间件
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static('./public'))
server.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set(
    'Access-Control-Allow-Headers',
    'content-type,access-token,multipart/form-data'
  )
  next()
})

server.use('/api', [userRouter])

server.listen(9090)
