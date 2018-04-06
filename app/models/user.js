const mongoose = require('../../config/db')

const UserSchema = {
  user: String,
  operational_system: String,
  is_online: Boolean,
  portugol_version: String,
  last_use: String,
  ip: String,
  extIp: String
}

const User = mongoose.model('User', UserSchema)

module.exports = User
