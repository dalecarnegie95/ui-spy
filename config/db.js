const mongoose = require('mongoose')

mongoose.connect('mongodb://<user>:<pass>@ds237389.mlab.com:37389/<db>', () => {
  console.log('mongodb connected')
})

module.exports = mongoose
