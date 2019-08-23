const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')
const fs = require('fs')
const multer = require('multer')
const path = require('path')
const router = express.Router()
const upload = multer({
  dest: './tmp'
})

/***
 * 修改头像
 * POST /api/user/update
 */
router.post('/user/update', upload.single('avatar'), (req, res) => {
  let token = req.get('Access-Token')
  if (!token) {
    res.status(403).send('不允许访问')
    return
  } else {
    jwt.verify(token, 'MY_GOD', (err, data) => {
      if (err) {
        console.log(err)

        res.status(401).send('身份验证失败')
        return
      } else {
        req.userInfo = data.userInfo
      }
    })
  }
  let newFileName = new Date().getTime() + '_' + req.file.originalname
  let newFilePath = path.resolve(__dirname, '../public', newFileName)
  let data = fs.readFileSync(req.file.path)
  fs.writeFileSync(newFilePath, data)
  UserModel.updateOne(
    { username: req.userInfo.username },
    { log: `http://localhost:9090/${newFileName}` }
  ).then(() => {
    res.send({
      code: 0,
      msg: '修改成功',
      data: `http://localhost:9090/${newFileName}`
    })
  })
})

/***
 * 注册
 * POST /api/sign-up
 */
router.post('/sign-up', async (req, res) => {
  let username = req.body.username
  let data = await UserModel.findOne({ username })
  if (!data) {
    let password = req.body.password
    let newPassword = bcryptjs.hashSync(password, 10)
    let user = new UserModel({
      username,
      password: newPassword
    })
    user
      .save()
      .then(() => {
        res.send({
          code: 0,
          msg: '注册成功'
        })
      })
      .catch(error => {
        res.send({
          code: -1,
          msg: error.message
        })
      })
  } else {
    res.send({
      code: -1,
      msg: '账号已存在'
    })
  }
})

/***
 * 登录
 * POST /api/sign-in
 */
router.post('/sign-in', async (req, res) => {
  let username = req.body.username
  let password = req.body.password
  let data = await UserModel.findOne({ username })
  if (data) {
    if (bcryptjs.compareSync(password, data.password)) {
      let userInfo = {
        userId: data._id,
        username: data.username,
        log: data.log,
        money: data.money,
        getmoney: data.getmoney
      }

      const token = jwt.sign(
        {
          userInfo
        },
        'MY_GOD'
      )

      res.send({
        code: 0,
        msg: '登录成功',
        data: {
          userInfo,
          token
        }
      })
    } else {
      res.send({
        code: -1,
        msg: '用户名或密码错误'
      })
    }
  } else {
    res.send({
      code: -1,
      msg: '用户名或密码错误'
    })
  }
})

/**
 * 领劵
 */
router.post('/get-money', (req, res) => {
  let username = req.body.username
  //let data = await UserModel.updateOne({ username }, { getmoney: 1 })
  UserModel.updateOne({ username }, { getmoney: 1 }).then(data => {
    res.send({
      code: 0,
      msg: 'ok'
    })
  })
  //console.log(data)
})

/***
 * 充值
 */
router.post('/set-money', async (req, res) => {
  let token = req.get('Access-Token')
  // let token = req.body.token
  //res.send('ok')
  if (!token) {
    res.status(403).send('不允许访问')
    return
  } else {
    jwt.verify(token, 'MY_GOD', (err, data) => {
      if (err) {
        console.log(err)

        res.status(401).send('身份验证失败')
        return
      }
    })
  }
  let money = req.body.money
  let username = req.body.username
  let data = await UserModel.findOne({ username })
  let newMoney = data.money + parseInt(money)
  UserModel.updateOne({ username }, { money: newMoney }).then(data => {
    res.send({
      code: 0,
      msg: '充值成功',
      data: {
        newMoney
      }
    })
  })
})

/***
 * 修改用户名
 */
router.post('/set-name', async (req, res) => {
  let username = req.body.username
  let newusername = req.body.newusername
  let data = await UserModel.findOne({ username: newusername })
  if (!data) {
    UserModel.updateOne({ username }, { username: newusername }).then(data => {
      res.send({
        code: 0,
        msg: '修改成功',
        data: {
          newusername
        }
      })
    })
  } else {
    res.send({
      code: -1,
      msg: '用户名已存在'
    })
  }
})

/**
 * 修改密码
 */
router.post('/set-password', async (req, res) => {
  let token = req.get('Access-Token')
  if (!token) {
    res.status(403).send('不允许访问')
    return
  } else {
    jwt.verify(token, 'MY_GOD', (err, data) => {
      if (err) {
        console.log(err)

        res.status(401).send('身份验证失败')
        return
      }
    })
  }

  let username = req.body.username
  let password = req.body.password
  let newpwd = req.body.newpassword

  let data = await UserModel.findOne({ username })
  if (bcryptjs.compareSync(password, data.password)) {
    let newPassword = bcryptjs.hashSync(newpwd, 10)
    UserModel.updateOne({ username }, { password: newPassword }).then(data => {
      res.send({
        code: 0,
        msg: '修改成功'
      })
    })
  } else {
    res.send({
      code: -1,
      msg: '密码错误'
    })
  }
})

module.exports = router
