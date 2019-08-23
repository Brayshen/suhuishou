const db = require('../config/db')

const schema = new db.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  log: {
    type: String,
    default: 'https://sr.aihuishou.com/neom/default-user.png'
  },
  money: {
    type: Number,
    default: 10000
  },
  getmoney: {
    type: Number,
    default: 0
  }
})

module.exports = db.model('user', schema)
