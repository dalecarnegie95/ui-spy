const mongoose = require('mongoose')

mongoose.connect('mongodb://user:senha123@ds117749.mlab.com:17749/ui-spy', () => {
  console.log('mongodb connected')
})

module.exports = mongoose
