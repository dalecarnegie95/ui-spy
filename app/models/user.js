const mongoose = require('../../config/db')

const UserSchema = {
  user: String,
  operational_system: String,
  is_online: Boolean,
  portugol_version: String
}

const User = mongoose.model('User', UserSchema)

module.exports = User